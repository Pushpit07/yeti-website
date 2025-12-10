"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface HQGalleryProps {
    folderUrl: string
    locationName: string
}

// This is a placeholder - in reality, you'd need a backend API to fetch images from Google Drive
// For now, we'll show a beautiful placeholder that indicates where images will appear
export function HQGallery({ folderUrl, locationName }: HQGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Placeholder images - replace with actual Google Drive fetching via backend API
    const images: string[] = []

    if (!folderUrl || images.length === 0) {
        return (
            <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            {locationName} <span className="text-primary">Headquarters</span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">
                            Explore our space where innovation meets collaboration.
                        </p>
                    </div>

                    {/* Modern Grid Placeholder */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="aspect-[4/3] bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm relative group hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-500 font-medium">Gallery coming soon</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-neutral-500 text-sm">
                            HQ photos will be loaded from Google Drive folder
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <>
            <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            {locationName} <span className="text-primary">Headquarters</span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">
                            Explore our space where innovation meets collaboration.
                        </p>
                    </div>

                    {/* Main Slideshow */}
                    <div className="relative group">
                        <div className="aspect-[21/9] bg-neutral-900 rounded-3xl overflow-hidden relative">
                            <Image
                                src={images[currentIndex]}
                                alt={`${locationName} HQ - Image ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Expand Button */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                            >
                                View Fullscreen
                            </button>

                            {/* Counter */}
                            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="mt-6 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === currentIndex
                                            ? "border-primary scale-105"
                                            : "border-white/10 hover:border-white/30"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                    >
                        <X size={24} />
                    </button>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full h-full max-w-7xl max-h-full">
                            <Image
                                src={images[currentIndex]}
                                alt={`${locationName} HQ - Image ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    )
}
