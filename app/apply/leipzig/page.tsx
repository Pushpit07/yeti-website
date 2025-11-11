import { ApplyPageView } from "@/components/ApplyPageView"

export const dynamic = "force-static"

export default async function ApplyLeipzigPage() {
  return <ApplyPageView data={{
    title: "Apply for YETI Leipzig",
    cta: { label: "Start Application", href: "#" },
    timeline: [],
    faqs: [],
    resources: []
  }} />
}

