import { ImageResponse } from "next/og"
import { readJson } from "@/lib/content"
import type { SiteSettings } from "@/lib/types"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const site = await readJson<SiteSettings>("site.json").catch(() => undefined)
  const title = site?.site?.title ?? "YETI"
  const desc = site?.site?.tagline ?? "Young Entrepreneurs in Tech and Innovation"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
          color: "white",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.8 }}>{desc}</div>
      </div>
    ),
    { ...size }
  )
}

