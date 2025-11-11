import { ApplyPageView } from "@/components/ApplyPageView"

export const dynamic = "force-static"

export default async function ApplyDresdenPage() {
  return <ApplyPageView data={{
    title: "Apply for YETI Dresden",
    cta: { label: "Start Application", href: "#" },
    timeline: [],
    faqs: [],
    resources: []
  }} />
}

