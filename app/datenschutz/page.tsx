import { Section } from "@/components/Section"
import { CONTACT_INFO } from "@/lib/constants"

export const dynamic = "force-static"

export const metadata = {
  title: "Datenschutzerklärung | YETI",
  description: "YETI Datenschutzerklärung - Erfahren Sie, wie wir Ihre personenbezogenen Daten behandeln und schützen",
}

export default function DatenschutzPage() {
  return (
    <div className="font-sans">
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Datenschutz­erklärung</h1>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* 1. Datenschutz auf einen Blick */}
          <h2 className="text-3xl font-bold mb-6 mt-8">1. Datenschutz auf einen Blick</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Allgemeine Hinweise</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Datenerfassung auf dieser Website</h3>
          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerklärung entnehmen.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Wie erfassen wir Ihre Daten?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Wofür nutzen wir Ihre Daten?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Analyse-Tools und Tools von Dritt­anbietern</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
          </p>

          {/* 2. Hosting */}
          <h2 className="text-3xl font-bold mb-6 mt-12">2. Hosting</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Hetzner</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (nachfolgend Hetzner).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Details entnehmen Sie der Datenschutzerklärung von Hetzner: <a href="https://www.hetzner.com/de/legal/privacy-policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.hetzner.com/de/legal/privacy-policy/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Auftragsverarbeitung</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <h2 className="text-3xl font-bold mb-6 mt-12">3. Allgemeine Hinweise und Pflicht­informationen</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Datenschutz</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Hinweis zur verantwortlichen Stelle</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6">
            <p className="text-neutral-700 leading-relaxed mb-2">Stiftung Thomas Kirchner Bildungsförderungs gGmbH</p>
            <p className="text-neutral-700 leading-relaxed mb-2">c/o Thomas Kirchner</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Zennerstr. 1</p>
            <p className="text-neutral-700 leading-relaxed mb-4">81379 München</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Telefon: {CONTACT_INFO.phoneDisplay}</p>
            <p className="text-neutral-700 leading-relaxed">E-Mail: info@yeti-dresden.org</p>
          </div>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Speicherdauer</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Empfänger von personenbezogenen Daten</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
          <div className="bg-neutral-100 border-l-4 border-neutral-900 p-6 mb-6">
            <p className="text-neutral-700 leading-relaxed mb-4 font-semibold uppercase">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>
            <p className="text-neutral-700 leading-relaxed font-semibold uppercase">
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-6">Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Recht auf Daten­übertrag­barkeit</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Auskunft, Berichtigung und Löschung</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
          </p>
          <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
            <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
            <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">SSL- bzw. TLS-Verschlüsselung</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
          </p>

          {/* 4. Datenerfassung auf dieser Website */}
          <h2 className="text-3xl font-bold mb-6 mt-12">4. Datenerfassung auf dieser Website</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Cookies</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Einwilligung mit Usercentrics</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Diese Website nutzt die Consent-Technologie von Usercentrics, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist die Usercentrics GmbH, Sendlinger Straße 7, 80331 München, Website: <a href="https://usercentrics.com/de/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://usercentrics.com/de/</a> (im Folgenden &bdquo;Usercentrics&ldquo;).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie unsere Website betreten, werden folgende personenbezogene Daten an Usercentrics übertragen:
          </p>
          <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
            <li>Ihre Einwilligung(en) bzw. der Widerruf Ihrer Einwilligung(en)</li>
            <li>Ihre IP-Adresse</li>
            <li>Informationen über Ihren Browser</li>
            <li>Informationen über Ihr Endgerät</li>
            <li>Zeitpunkt Ihres Besuchs auf der Website</li>
            <li>Geolocation</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Des Weiteren speichert Usercentrics ein Cookie in Ihrem Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf zuordnen zu können. Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern, das Usercentrics-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungspflichten bleiben unberührt.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Usercentrics-Banner auf dieser Website wurde mit Hilfe von eRecht24 konfiguriert. Das erkennen Sie daran, dass im Banner das Logo von eRecht24 auftaucht. Um das eRecht24-Logo im Banner auszuspielen, wird eine Verbindung zum Bildserver von eRecht24 hergestellt. Hierbei wird auch die IP-Adresse übertragen, die jedoch nur in anonymisierter Form in den Server-Logs gespeichert wird. Der Bildserver von eRecht24 befindet sich in Deutschland bei einem deutschen Anbieter. Das Banner selbst wird ausschließlich von Usercentrics zur Verfügung gestellt.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Einsatz von Usercentrics erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Auftragsverarbeitung</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>

          {/* 5. Analyse-Tools und Werbung */}
          <h2 className="text-3xl font-bold mb-6 mt-12">5. Analyse-Tools und Werbung</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Tag Manager</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Analytics</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers zugeordnet.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei der Datenanalyse ein.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">IP Anonymisierung</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Browser Plugin</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Google-Signale</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir nutzen Google-Signale. Wenn Sie unsere Website besuchen, erfasst Google Analytics u. a. Ihren Standort, Suchverlauf und YouTube-Verlauf sowie demografische Daten (Besucherdaten). Diese Daten können mit Hilfe von Google-Signal für personalisierte Werbung verwendet werden. Wenn Sie über ein Google-Konto verfügen, werden die Besucherdaten von Google-Signal mit Ihrem Google-Konto verknüpft und für personalisierte Werbebotschaften verwendet. Die Daten werden außerdem für die Erstellung anonymisierter Statistiken zum Nutzerverhalten unserer User verwendet.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Auftragsverarbeitung</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Ads</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie viele Anzeigen zu entsprechenden Klicks geführt haben.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://policies.google.com/privacy/frameworks" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy/frameworks</a> und <a href="https://business.safety.google/controllerterms/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://business.safety.google/controllerterms/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          {/* 6. Newsletter */}
          <h2 className="text-3xl font-bold mb-6 mt-12">6. Newsletter</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Newsletter­daten</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den &bdquo;Austragen&ldquo;-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
          </p>

          {/* 7. Plugins und Tools */}
          <h2 className="text-3xl font-bold mb-6 mt-12">7. Plugins und Tools</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">YouTube mit erweitertem Datenschutz</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage von YouTube nicht zur Personalisierung des Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt werden, sind ebenfalls nicht personalisiert. Im erweiterten Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden jedoch sogenannte Local Storage Elemente im Browser des Users gespeichert, die ähnlich wie Cookies personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt werden können. Details zum erweiterten Datenschutzmodus finden Sie hier: <a href="https://support.google.com/youtube/answer/171780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/youtube/answer/171780</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Gegebenenfalls können nach der Aktivierung eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter: <a href="https://policies.google.com/privacy?hl=de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Maps</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf unserer Website einbinden.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Das Unternehmen verfügt über eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <div className="mt-12 bg-neutral-50 rounded-lg p-6">
            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Kontaktadresse:</strong></p>
            <p className="text-neutral-700 leading-relaxed mb-1">Leubnitzer Str. 28</p>
            <p className="text-neutral-700 leading-relaxed mb-3">01069 Dresden</p>
            <p className="text-neutral-700 leading-relaxed"><strong>E-Mail:</strong> info@yeti-dresden.org</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
