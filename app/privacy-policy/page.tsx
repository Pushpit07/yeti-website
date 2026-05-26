import { Section } from "@/components/Section"
import { CONTACT_INFO } from "@/lib/constants"

export const dynamic = "force-static"

export const metadata = {
  title: "Privacy Policy | YETI",
  description: "YETI Privacy Policy - Learn how we handle and protect your personal data",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans">
      <section className="relative bg-black py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-white/90 md:text-xl">Learn how we handle and protect your personal data</p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* 1. Overview */}
          <h2 className="text-3xl font-bold mb-6 mt-8">1. An overview of data protection</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">General information</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term &quot;personal data&quot; comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Data recording on this website</h3>
          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">
            Who is the responsible party for the recording of data on this website (i.e., the &quot;controller&quot;)?
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The data on this website is processed by the operator of the website, whose contact information is available under section &quot;Information about the responsible party (referred to as the &apos;controller&apos; in the GDPR)&quot; in this Privacy Policy.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">How do we record your data?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">What are the purposes we use your data for?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other order enquiries.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">What rights do you have as far as your information is concerned?</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Analysis tools and tools provided by third parties</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For detailed information about these analysis programs please consult our Data Protection Declaration below.
          </p>

          {/* 2. Hosting */}
          <h2 className="text-3xl font-bold mb-6 mt-12">2. Hosting</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            We are hosting the content of our website at the following provider:
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Hetzner</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The provider is the Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany (hereinafter referred to as Hetzner).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For details, please view the data privacy policy of Hetzner: <a href="https://www.hetzner.com/de/legal/privacy-policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.hetzner.com/de/legal/privacy-policy/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We use Hetzner on the basis of Art. 6(1)(f) GDPR. We have a legitimate interest in the most reliable depiction of our website possible. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TDDDG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Data processing</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.
          </p>

          {/* 3. General information */}
          <h2 className="text-3xl font-bold mb-6 mt-12">3. General information and mandatory information</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Data protection</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Information about the responsible party (referred to as the &quot;controller&quot; in the GDPR)</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The data processing controller on this website is:
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6">
            <p className="text-neutral-700 leading-relaxed mb-2">Stiftung Thomas Kirchner Bildungsförderungs gGmbH</p>
            <p className="text-neutral-700 leading-relaxed mb-2">c/o Thomas Kirchner</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Zennerstr. 1</p>
            <p className="text-neutral-700 leading-relaxed mb-4">81379 München</p>
            <p className="text-neutral-700 leading-relaxed mb-2">Phone: {CONTACT_INFO.phoneDisplay}</p>
            <p className="text-neutral-700 leading-relaxed">E-mail: info@yeti-fellowship.org</p>
          </div>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Storage duration</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">General information on the legal basis for the data processing on this website</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special categories of data are processed according to Art. 9 (1) DSGVO. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1)(a) GDPR. If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TDDDG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6(1)(c) GDPR. Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6(1)(f) GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Recipients of personal data</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            In the scope of our business activities, we cooperate with various external parties. In some cases, this also requires the transfer of personal data to these external parties. We only disclose personal data to external parties if this is required as part of the fulfillment of a contract, if we are legally obligated to do so (e.g., disclosure of data to tax authorities), if we have a legitimate interest in the disclosure pursuant to Art. 6 (1)(f) GDPR, or if another legal basis permits the disclosure of this data. When using processors, we only disclose personal data of our customers on the basis of a valid contract on data processing. In the case of joint processing, a joint processing agreement is concluded.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Revocation of your consent to the processing of data</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Right to object to the collection of data in special cases; right to object to direct advertising (Art. 21 GDPR)</h3>
          <div className="bg-neutral-100 border-l-4 border-neutral-900 p-6 mb-6">
            <p className="text-neutral-700 leading-relaxed mb-4 font-semibold uppercase">
              IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21(1) GDPR).
            </p>
            <p className="text-neutral-700 leading-relaxed font-semibold uppercase">
              IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-6">Right to log a complaint with the competent supervisory agency</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Right to data portability</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Information about, rectification and eradication of data</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Within the scope of the applicable statutory provisions, you have the right to demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data at any time. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Right to demand processing restrictions</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time. The right to demand restriction of processing applies in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
            <li>In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data.</li>
            <li>If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data instead of demanding the eradication of this data.</li>
            <li>If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.</li>
            <li>If you have raised an objection pursuant to Art. 21(1) GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data.</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">SSL and/or TLS encryption</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption program. You can recognize an encrypted connection by checking whether the address line of the browser switches from &quot;http://&quot; to &quot;https://&quot; and also by the appearance of the lock icon in the browser line.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.
          </p>

          {/* 4. Recording of data on this website */}
          <h2 className="text-3xl font-bold mb-6 mt-12">4. Recording of data on this website</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Cookies</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Our websites and pages use what the industry refers to as &quot;cookies.&quot; Cookies are small data packages that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them, or they are automatically eradicated by your web browser.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies can be issued by us (first-party cookies) or by third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services of third-party companies into websites (e.g., cookies for handling payment services).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of these cookies (e.g., the shopping cart function or the display of videos). Other cookies may be used to analyze user behavior or for promotional purposes.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Cookies, which are required for the performance of electronic communication transactions, for the provision of certain functions you want to use (e.g., for the shopping cart function) or those that are necessary for the optimization (required cookies) of the website (e.g., cookies that provide measurable insights into the web audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a different legal basis is cited. The operator of the website has a legitimate interest in the storage of required cookies to ensure the technically error-free and optimized provision of the operator&apos;s services. If your consent to the storage of the cookies and similar recognition technologies has been requested, the processing occurs exclusively on the basis of the consent obtained (Art. 6(1)(a) GDPR and § 25 (1) TDDDG); this consent may be revoked at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete-function for the automatic eradication of cookies when the browser closes. If cookies are deactivated, the functions of this website may be limited.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Which cookies and services are used on this website can be found in this privacy policy.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Consent with Usercentrics</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            This website uses the consent technology of Usercentrics to obtain your consent to the storage of certain cookies on your device or for the use of specific technologies, and to document the former in a data protection compliant manner. The party offering this technology is Usercentrics GmbH, Sendlinger Straße 7, 80331 München, Germany, website: <a href="https://usercentrics.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://usercentrics.com/</a> (hereinafter referred to as &quot;Usercentrics&quot;).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Whenever you visit our website, the following personal data will be transferred to Usercentrics:
          </p>
          <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
            <li>Your declaration(s) of consent or your revocation of your declaration(s) of consent</li>
            <li>Your IP address</li>
            <li>Information about your browser</li>
            <li>Information about your device</li>
            <li>The date and time you visited our website</li>
          </ul>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Moreover, Usercentrics shall store a cookie in your browser to be able to allocate your declaration(s) of consent or any revocations of the former. The data that are recorded in this manner shall be stored until you ask us to eradicate them, delete the Usercentrics cookie or until the purpose for archiving the data no longer exists. This shall be without prejudice to any mandatory legal retention periods.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Usercentrics uses cookies to obtain the declarations of consent mandated by law. The legal basis for the use of specific technologies is Art. 6(1)(c) GDPR.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Data processing</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Request by e-mail, telephone, or fax</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            These data are processed on the basis of Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures. In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or on the basis of your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent can be revoked at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.
          </p>

          {/* 5. Analysis tools and advertising */}
          <h2 className="text-3xl font-bold mb-6 mt-12">5. Analysis tools and advertising</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Tag Manager</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We use the Google Tag Manager. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The Google Tag Manager is a tool that allows us to integrate tracking or statistical tools and other technologies on our website. The Google Tag Manager itself does not create any user profiles, does not store cookies, and does not carry out any independent analyses. It only manages and runs the tools integrated via it. However, the Google Tag Manager does collect your IP address, which may also be transferred to Google&apos;s parent company in the United States.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The Google Tag Manager is used on the basis of Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the quick and uncomplicated integration and administration of various tools on his website. If the appropriate consent has been requested, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 para. 1 TDDDG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Analytics</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            This website uses functions of the web analysis service Google Analytics. The provider of this service is Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Analytics enables the website operator to analyze the behavior patterns of website visitors. To that end, the website operator receives a variety of user data, such as pages accessed, time spent on the page, the utilized operating system and the user&apos;s origin. This data is summarized in a user-ID and assigned to the respective end device of the website visitor.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Furthermore, Google Analytics allows us to record your mouse and scroll movements and clicks, among other things. Google Analytics uses various modeling approaches to augment the collected data sets and uses machine learning technologies in data analysis.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Analytics uses technologies that make the recognition of the user for the purpose of analyzing the user behavior patterns (e.g., cookies or device fingerprinting). The website use information recorded by Google is, as a rule transferred to a Google server in the United States, where it is stored.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The use of these services occurs on the basis of your consent pursuant to Art. 6(1)(a) GDPR and § 25(1) TDDDG. You may revoke your consent at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Browser plug-in</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            You can prevent the recording and processing of your data by Google by downloading and installing the browser plugin available under the following link: <a href="https://tools.google.com/dlpage/gaoptout?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=en</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For more information about the handling of user data by Google Analytics, please consult Google&apos;s Data Privacy Declaration at: <a href="https://support.google.com/analytics/answer/6004245?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=en</a>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 font-semibold">Contract data processing</p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We have executed a contract data processing agreement with Google and are implementing the stringent provisions of the German data protection agencies to the fullest when using Google Analytics.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Ads</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The website operator uses Google Ads. Google Ads is an online promotional program of Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Google Ads enables us to display ads in the Google search engine or on third-party websites, if the user enters certain search terms into Google (keyword targeting). It is also possible to place targeted ads based on the user data Google has in its possession (e.g., location data and interests; target group targeting). As the website operator, we can analyze these data quantitatively, for instance by analyzing which search terms resulted in the display of our ads and how many ads led to respective clicks.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The use of these services occurs on the basis of your consent pursuant to Art. 6(1)(a) GDPR and § 25(1) TDDDG. You may revoke your consent at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
          </p>

          {/* 6. Newsletter */}
          <h2 className="text-3xl font-bold mb-6 mt-12">6. Newsletter</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">Newsletter data</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            If you would like to subscribe to the newsletter offered on this website, we will need from you an e-mail address as well as information that allow us to verify that you are the owner of the e-mail address provided, and consent to the receipt of the newsletter. No further data shall be collected or shall be collected only on a voluntary basis. We shall use such data only for the sending of the requested information and shall not share such data with any third parties.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The processing of the information entered into the newsletter subscription form shall occur exclusively on the basis of your consent (Art. 6(1)(a) GDPR). You may revoke the consent you have given to the archiving of data, the e-mail address, and the use of this information for the sending of the newsletter at any time, for instance by clicking on the &quot;Unsubscribe&quot; link in the newsletter. This shall be without prejudice to the lawfulness of any data processing transactions that have taken place to date.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The data deposited with us for the purpose of subscribing to the newsletter will be stored by us until you unsubscribe from the newsletter or the newsletter service provider and deleted from the newsletter distribution list after you unsubscribe from the newsletter or after the purpose has been eliminated. We reserve the right to delete or block e-mail addresses from our newsletter distribution list at our own discretion within the scope of our legitimate interest in accordance with Art. 6(1)(f) GDPR.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Data stored for other purposes with us remain unaffected.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            After you unsubscribe from the newsletter distribution list, your e-mail address may be stored by us or the newsletter service provider in a blacklist, if such action is necessary to prevent future mailings. The data from the blacklist is used only for this purpose and not merged with other data. This serves both your interest and our interest in complying with the legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6(1)(f) GDPR). The storage in the blacklist is indefinite. You may object to the storage if your interests outweigh our legitimate interest.
          </p>

          {/* 7. Plug-ins and Tools */}
          <h2 className="text-3xl font-bold mb-6 mt-12">7. Plug-ins and Tools</h2>

          <h3 className="text-2xl font-bold mb-4 mt-6">YouTube with expanded data protection integration</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Our website embeds videos of the website YouTube. The website operator is Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We use YouTube in the expanded data protection mode. According to YouTube, this mode ensures that YouTube does not store any information about visitors to this website before they watch the video. Nevertheless, this does not necessarily mean that the sharing of data with YouTube partners can be ruled out as a result of the expanded data protection mode. For instance, regardless of whether you are watching a video, YouTube will always establish a connection with the Google DoubleClick network.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            As soon as you start to play a YouTube video on this website, a connection to YouTube&apos;s servers will be established. As a result, the YouTube server will be notified, which of our pages you have visited. If you are logged into your YouTube account while you visit our site, you enable YouTube to directly allocate your browsing patterns to your personal profile. You have the option to prevent this by logging out of your YouTube account.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Furthermore, after you have started to play a video, YouTube will be able to place various cookies on your device or comparable technologies for recognition (e.g. device fingerprinting). In this way YouTube will be able to obtain information about this website&apos;s visitors. Among other things, this information will be used to generate video statistics with the aim of improving the user friendliness of the site and to prevent attempts to commit fraud.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Under certain circumstances, additional data processing transactions may be triggered after you have started to play a YouTube video, which are beyond our control.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The use of YouTube is based on our interest in presenting our online content in an appealing manner. Pursuant to Art. 6(1)(f) GDPR, this is a legitimate interest. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TDDDG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For more information on how YouTube handles user data, please consult the YouTube Data Privacy Policy under: <a href="https://policies.google.com/privacy?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The company is certified in accordance with the “EU-US Data Privacy Framework” (DPF). The DPF is an agreement between the European Union and the US, which is intended to ensure compliance with European data protection standards for data processing in the US. Every company certified under the DPF is obliged to comply with these data protection standards. For more information, please contact the provider under the following link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-6">Google Maps</h3>
          <p className="text-neutral-700 leading-relaxed mb-6">
            This website uses the mapping service Google Maps. The provider is Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Ireland.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            To enable the use of the Google Maps features, your IP address must be stored. As a rule, this information is transferred to one of Google&apos;s servers in the United States, where it is archived. The operator of this website has no control over the data transfer. In case Google Maps has been activated, Google has the option to use Google web fonts for the purpose of the uniform depiction of fonts. When you access Google Maps, your browser will load the required web fonts into your browser cache, to correctly display text and fonts.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            We use Google Maps to present our online content in an appealing manner and to make the locations disclosed on our website easy to find. This constitutes a legitimate interest as defined in Art. 6(1)(f) GDPR. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TDDDG, insofar the consent includes the storage of cookies or the access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. This consent can be revoked at any time.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> and <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            For more information on the handling of user data, please review Google&apos;s Data Privacy Declaration under: <a href="https://policies.google.com/privacy?hl=en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            The company is certified in accordance with the “EU-US Data Privacy Framework” (DPF). The DPF is an agreement between the European Union and the US, which is intended to ensure compliance with European data protection standards for data processing in the US. Every company certified under the DPF is obliged to comply with these data protection standards. For more information, please contact the provider under the following link: <a href="https://www.dataprivacyframework.gov/participant/5780" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <div className="mt-12 bg-neutral-50 rounded-lg p-6">
            <p className="text-neutral-700 leading-relaxed mb-2"><strong>Contact Address:</strong></p>
            <p className="text-neutral-700 leading-relaxed mb-1">Leubnitzer Str. 28</p>
            <p className="text-neutral-700 leading-relaxed mb-3">01069 Dresden</p>
            <p className="text-neutral-700 leading-relaxed"><strong>Email:</strong> info@yeti-fellowship.org</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
