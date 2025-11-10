import { readJson } from "@/lib/content"
import type { ApplyPage } from "@/lib/types"
import { ApplyPageView } from "@/components/ApplyPageView"

export const dynamic = "force-static"

export default async function ApplyLeipzigPage() {
  const data = await readJson<ApplyPage>("apply/leipzig.json")
  return <ApplyPageView data={data} />
}

