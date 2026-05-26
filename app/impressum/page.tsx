import { Section } from "@/components/Section"
import { CONTACT_INFO } from "@/lib/constants"

export const dynamic = "force-static"

export const metadata = {
  title: "Impressum | YETI",
  description: "YETI Impressum - Angaben gemäß § 5 TMG",
}

export default function ImpressumPage() {
  return (
    <div className="font-sans">
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Impressum</h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 mt-8">Angaben gemäß § 5 TMG</h2>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <p className="text-neutral-700 leading-relaxed mb-2">Stiftung Thomas Kirchner Bildungsförderungs gGmbH</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Zennerstr. 1</p>
            <p className="text-neutral-700 leading-relaxed mb-2">c/o Thomas Kirchner</p>
            <p className="text-neutral-700 leading-relaxed mb-4">81379 München</p>

            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Handelsregister:</strong> HRB 281372</p>
            <p className="text-neutral-700 leading-relaxed mb-6"><strong>Registergericht:</strong> Amtsgericht 80333 München</p>

            <p className="text-neutral-700 leading-relaxed mb-4"><strong>Vertreten durch:</strong></p>
            <p className="text-neutral-700 leading-relaxed mb-6">Thomas Kirchner</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Kontakt</h3>
          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Telefon:</strong> {CONTACT_INFO.phoneDisplay}</p>
            <p className="text-neutral-700 leading-relaxed"><strong>E-Mail:</strong> info@yeti-fellowship.org</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">EU-Streitschlichtung</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
          <p className="text-neutral-700 leading-relaxed mb-8">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </Section>
    </div>
  )
}
