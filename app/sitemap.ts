export default async function sitemap() {
  const baseUrl = "https://yeti-dresden.org"

  const events = [
    { slug: "6th-dresden-demoday" },
    { slug: "1st-leipzig-demoday" }
  ];

  const staticRoutes = [
    "",
    "/dresden",
    "/leipzig",
    "/application/dresden",
    "/application/leipzig",
    "/projects",
    "/contributors",
    "/events",
    "/impressum",
    "/privacy-policy",
    "/legal-notice",
    "/hq",
    "/makerspace",
    "/wtf",
    "/how-it-started",
  ]

  const eventRoutes = events.map((e) => `/events/${e.slug}`)
  const urls = [...staticRoutes, ...eventRoutes]

  return urls.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
  }))
}

