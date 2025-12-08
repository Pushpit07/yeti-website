import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const title = "YETI"
  const desc = "Young Entrepreneurs in Tech and Innovation"

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

