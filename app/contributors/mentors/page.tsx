"use client"

import { getMentorsData } from '@/lib/sheets'
import { ContributorGrid } from '@/components/contributors/ContributorGrid'
import { FadeIn } from '@/components/FadeIn'
import { useSheetData } from '@/hooks/useSheetData'

export default function MentorsPage() {
    const { data, isLoading } = useSheetData(getMentorsData)

    const items = data.map((item, index) => ({
        id: `mentor-${index}`,
        name: item.name,
        role: item.title,
        company: item.company,
        description: item.description,
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Mentors</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Our mentors help in guiding our students throughout the program, offering personalized advice and sharing their industry expertise.
                        </p>
                    </div>
                </FadeIn>

                <ContributorGrid items={items} />
            </div>
        </div>
    )
}

