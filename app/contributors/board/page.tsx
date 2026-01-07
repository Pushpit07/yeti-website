"use client"

import { getYetiBoardData } from '@/lib/sheets'
import { ContributorGrid } from '@/components/contributors/ContributorGrid'
import { FadeIn } from '@/components/FadeIn'
import { useSheetData } from '@/hooks/useSheetData'

export default function YetiBoardPage() {
    const { data, isLoading } = useSheetData("yetiBoard", getYetiBoardData)

    const items = data.map((item, index) => ({
        id: `board-${index}`,
        name: item.name,
        role: item.title,
        company: item.company,
        image: item.photo,
        linkedin: item.linkedin,
    }))

    if (isLoading) {
        return (
            <div className="bg-black min-h-screen text-white pt-24 pb-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Yeti Board</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            For strategic guidance and governance, the YETI Board brings together entrepreneurial and academic expertise, acting as an advisory body and helping shape the long-term direction.
                        </p>
                    </div>
                </FadeIn>

                <ContributorGrid items={items} />
            </div>
        </div>
    )
}

