'use client'

import { useState, useEffect } from 'react'

interface GallerySectionProps {
    contentFolder: string
    location: string
}

export function GallerySection({ contentFolder, location }: GallerySectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [images, setImages] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    // Extract folder ID from Google Drive URL
    const getFolderIdFromUrl = (url: string): string | null => {
        if (!url) return null
        const match = url.match(/folders\/([a-zA-Z0-9_-]+)/)
        return match ? match[1] : null
    }

    useEffect(() => {
        const loadImages = async () => {
            if (!contentFolder) {
                setLoading(false)
                return
            }

            const folderId = getFolderIdFromUrl(contentFolder)
            if (!folderId) {
                setLoading(false)
                return
            }

            // For now, we'll use a placeholder approach since we can't directly list Google Drive files
            // User should manually add image URLs or use a backend service
            // This is a simplified version - in production, you'd need a backend API
            setImages([])
            setLoading(false)
        }

        loadImages()
    }, [contentFolder])

    const nextSlide = () => {
        if (images.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }
    }

    const prevSlide = () => {
        if (images.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
    }

    // If no content folder or no images, show placeholder
    if (!contentFolder || images.length === 0) {
        return (
            <section id="gallery" className="bg-neutral-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Moments captured from YETI {location}
                        </p>
                    </div>

                    {/* Modern Grid Gallery Placeholder */}
                    <div className="relative">
                        {/* Large feature card */}
                        <div className="mb-4 rounded-3xl overflow-hidden bg-neutral-200 aspect-[21/9] border-2 border-dashed border-neutral-300 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">📸</div>
                                <p className="text-2xl font-bold text-neutral-500">Gallery Coming Soon</p>
                                <p className="text-neutral-400 mt-2">We're curating amazing moments from our community</p>
                            </div>
                        </div>

                        {/* Small grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-square rounded-2xl bg-neutral-200 border-2 border-dashed border-neutral-300 flex items-center justify-center hover:border-primary/50 transition-all"
                                >
                                    <div className="text-4xl">🎬</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Slideshow view when images are available
    return (
        <section id="gallery" className="bg-neutral-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Moments captured from YETI {location}
                    </p>
                </div>

                {/* Slideshow */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl">
                        <img
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                            aria-label="Previous image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                            aria-label="Next image"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Slide Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="mt-6 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === currentIndex
                                        ? 'border-primary scale-105'
                                        : 'border-transparent hover:border-neutral-300'
                                    }`}
                            >
                                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
