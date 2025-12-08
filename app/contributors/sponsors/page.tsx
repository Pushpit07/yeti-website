import { getSponsorsData } from '@/lib/sheets'
import { ContributorGrid } from '@/components/contributors/ContributorGrid'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function SponsorsPage() {
    const data = await getSponsorsData()

    // Group data by category
    const groupedData = data.reduce((acc, item) => {
        const category = item.category || 'Our Partners'
        if (!acc[category]) {
            acc[category] = []
        }
        acc[category].push({
            id: `sponsor-${item.company}-${acc[category].length}`,
            name: item.company,
            role: item.type,
            description: item.description,
            image: item.photo,
            linkedin: item.linkedin,
        })
        return acc
    }, {} as Record<string, any[]>)

    // Get categories and sort them if needed (optional)
    const categories = Object.keys(groupedData)

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-24">
            <div className="container mx-auto px-4 md:px-8">
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Partners</h1>
                        <p className="text-xl text-white/80 leading-relaxed">
                            Our partners are vital to the YETI ecosystem. They provide resources, expertise, and opportunities that help our startups thrive.
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-24">
                    {categories.map((category) => {
                        // Smart "Our" prefix
                        const title = category.toLowerCase().startsWith('our ') ? category : `Our ${category}`
                        return (
                            <section key={category}>
                                <FadeIn>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6">{title}</h2>
                                </FadeIn>
                                <ContributorGrid items={groupedData[category]} />
                            </section>
                        )
                    })}
                </div>

                {/* Integration of CTA Section */}
                <FadeIn>
                    <div className="mt-32 border-t border-white/10 pt-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Would you like to become our partner?
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                            We are always looking for collaboration with young minds and forward-thinking companies.
                            Join the YETI ecosystem and help shape the future of entrepreneurship.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                href="mailto:sandra@yeti-dresden.org"
                                variant="solid"
                                className="bg-white text-black hover:bg-neutral-200"
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
