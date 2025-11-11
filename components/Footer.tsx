import { FooterClient } from "./FooterClient"

export default async function Footer() {
  return <FooterClient
    nav={{
      main: [
        { label: "WTF is YETI?", href: "/wtf" },
        { label: "Dresden", href: "/dresden" },
        { label: "Leipzig", href: "/leipzig" },
        { label: "HQ", href: "/hq" },
        { label: "Makerspace", href: "/makerspace" },
        {
          label: "Apply",
          children: [
            { label: "for Dresden", href: "/apply/dresden" },
            { label: "for Leipzig", href: "/apply/leipzig" }
          ]
        },
        { label: "Projects", href: "/projects" },
        { label: "Contributors", href: "/contributors" },
        { label: "Events", href: "/events" }
      ],
      footer: [
        { label: "Legal Notice – Impressum", href: "/legal/impressum" },
        { label: "Privacy Policy – Datenschutz", href: "/legal/privacy" }
      ]
    }}
    address="Leubnitzer Str. 28, 01069 Dresden"
    email="info@yeti-dresden.org"
  />
}

