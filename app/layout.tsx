import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { readJson } from "@/lib/content";
import type { SiteSettings } from "@/lib/types";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await readJson<SiteSettings>("site.json")
  const title = site.site?.title ?? "YETI"
  const description = site.site?.description ?? "Young Entrepreneurs in Tech and Innovation"
  const url = site.site?.url ?? ""
  return {
    title,
    description,
    metadataBase: url ? new URL(url) : undefined,
    openGraph: {
      title,
      description,
      url: url || undefined,
      siteName: title,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConditionalLayout header={<Header />} footer={<Footer />}>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
