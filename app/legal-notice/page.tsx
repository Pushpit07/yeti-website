import { Section } from "@/components/Section"

export const dynamic = "force-static"

export const metadata = {
  title: "Legal Notice | YETI",
  description: "YETI Legal Notice - Site Notice and legal information pursuant to Sect. 5 German Telemedia Act (TMG)",
}

export default function LegalNoticePage() {
  return (
    <div className="font-sans">
      <section className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-8 md:px-12">
          <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Legal Notice</h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">Site Notice and legal information</p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 mt-8">Site Notice</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h3>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <p className="text-neutral-700 leading-relaxed mb-2">Stiftung Thomas Kirchner Bildungsförderungs gGmbH</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Zennerstr. 1</p>
            <p className="text-neutral-700 leading-relaxed mb-2">c/o Thomas Kirchner</p>
            <p className="text-neutral-700 leading-relaxed mb-4">81379 München</p>

            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Commercial Register:</strong> HRB 281372</p>
            <p className="text-neutral-700 leading-relaxed mb-6"><strong>Registration court:</strong> Amtsgericht 80333 München</p>

            <p className="text-neutral-700 leading-relaxed mb-4"><strong>Represented by:</strong></p>
            <p className="text-neutral-700 leading-relaxed mb-6">Thomas Kirchner</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Contact</h3>
          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Phone:</strong> 0351 463–35638</p>
            <p className="text-neutral-700 leading-relaxed"><strong>E-mail:</strong> info@yeti-dresden.org</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">EU dispute resolution</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Our e-mail address can be found above in the site notice.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Dispute resolution proceedings in front of a consumer arbitration board</h3>
          <p className="text-neutral-700 leading-relaxed mb-8">
            We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
          </p>
        </div>
      </Section>
    </div>
  )
}
