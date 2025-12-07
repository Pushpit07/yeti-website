import { ContributorsClient } from "./ContributorsClient"

export const dynamic = "force-static"

export const metadata = {
  title: "Contributors | YETI",
  description: "Get to know the YETI community - Leadership, Teams, Mentors, and Partners.",
}

export default function ContributorsPage() {
  return <ContributorsClient />
}
