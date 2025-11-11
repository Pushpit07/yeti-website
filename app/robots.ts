export default async function robots() {
  const url = "https://yeti-dresden.org"
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: url ? [`${url}/sitemap.xml`] : [],
  }
}

