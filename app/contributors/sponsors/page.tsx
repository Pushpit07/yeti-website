import { getSponsorsData } from '@/lib/sheets'
import { ContributorGrid } from '@/components/contributors/ContributorGrid'
import { FadeIn } from '@/components/FadeIn'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function SponsorsPage() {
    const data = await getSponsorsData()

    const items = data.map((item, index) => ({
        id: `sponsor-${index}`,
        name: item.company,
        role: item.type,
        description: item.description,
        image: item.photo,
        linkedin: item.linkedin,
    }))

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Sponsors</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Our sponsors are vital partners who support the YETI ecosystem. They provide resources, expertise, and opportunities that help our startups thrive.
                        </p>
                    </div>
                </FadeIn>

                <ContributorGrid items={items} />
            </div>
        </div>
    )
}
