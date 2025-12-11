"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HQGalleryProps {
    images: string[]
    locationName: string
}

export function HQGallery({ images = [], locationName }: HQGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Scroll active thumbnail into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            const activeThumb = scrollContainerRef.current.children[currentIndex] as HTMLElement
            if (activeThumb) {
                const containerWidth = scrollContainerRef.current.offsetWidth
                const thumbLeft = activeThumb.offsetLeft
                const thumbWidth = activeThumb.offsetWidth

                scrollContainerRef.current.scrollTo({
                    left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
                    behavior: 'smooth'
                })
            }
        }
    }, [currentIndex])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    if (!images || images.length === 0) {
        return (
            <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        {locationName} <span className="text-primary">Gallery</span>
                    </h2>
                    <div className="aspect-[21/9] bg-neutral-900/50 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center">
                            <div className="text-6xl mb-4">📸</div>
                            <p className="text-xl text-neutral-400">Gallery coming soon</p>
                            <p className="text-sm text-neutral-600 mt-2">We are curating the best moments</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-neutral-50 py-16 md:py-24" id="gallery">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Life at <span className="text-primary">{locationName} HQ</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        See where the magic happens.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Main Preview */}
                    <div className="relative aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200 mb-6 group">

                        {/* Loading Skeleton */}
                        <div className="absolute inset-0 bg-neutral-100 animate-pulse" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={images[currentIndex]}
                                    alt={`Gallery Image ${currentIndex + 1}`}
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Overlay */}
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevSlide() }}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all transform hover:scale-105"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextSlide() }}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all transform hover:scale-105"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Expand Button */}
                        <button
                            onClick={() => setIsFullscreen(true)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <Maximize2 className="w-5 h-5" />
                        </button>

                        {/* Counter Pill */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-hide snap-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`flex-shrink-0 relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 snap-center
                                    ${idx === currentIndex
                                        ? 'ring-2 ring-primary ring-offset-2 ring-offset-neutral-50 shadow-md scale-105 opacity-100'
                                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="128px"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setIsFullscreen(false)}
                    >
                        <div className="relative w-full h-full p-4 md:p-10 flex items-center justify-center">
                            <Image
                                src={images[currentIndex]}
                                alt={`Fullscreen Image ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                quality={100}
                            />

                            <button
                                onClick={(e) => { e.stopPropagation(); prevSlide() }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextSlide() }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>

                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="absolute top-4 right-4 text-white/50 text-sm hidden">
                                Press ESC to close
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
