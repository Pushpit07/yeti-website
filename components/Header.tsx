import { HeaderClient } from "./HeaderClient"

export default async function Header({ variant = "default" }: { variant?: "default" | "black" }) {
  return <HeaderClient
    nav={{
      main: [
        { label: "WTF is YETI?", href: "/wtf" },
        {
          label: "Dresden",
          children: [
            { label: "Overview", href: "/dresden" },
            { label: "HQ", href: "/hq" },
            { label: "Makerspace", href: "/makerspace" }
          ]
        },
        { label: "Leipzig", href: "/leipzig" },
        // { label: "Blog", href: "/blogs" },
        { label: "Projects", href: "/projects" },
        { label: "Contributors", href: "/contributors" },
        { label: "Events", href: "/events" }
      ],
      footer: [
        { label: "Legal Notice", href: "/legal-notice" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" }
      ]
    }}
    title="YETI"
    variant={variant}
  />
}

