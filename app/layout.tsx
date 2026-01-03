import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { DynamicHeader } from "@/components/DynamicHeader";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "YETI",
    description: "We empower young people to become entrepreneurial role models through networking, training and resources.",
    metadataBase: new URL("https://yeti-dresden.org"),
    openGraph: {
      title: "YETI",
      description: "We empower young people to become entrepreneurial role models through networking, training and resources.",
      url: "https://yeti-dresden.org",
      siteName: "YETI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "YETI",
      description: "We empower young people to become entrepreneurial role models through networking, training and resources.",
    },
    icons: {
      icon: [
        { url: "/logo.jpg" },
        { url: "/logo.jpg", sizes: "32x32", type: "image/jpeg" },
        { url: "/logo.jpg", sizes: "16x16", type: "image/jpeg" },
      ],
      apple: "/logo.jpg",
      shortcut: "/logo.jpg",
    },
    manifest: "/manifest.json",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 - Only in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ConditionalLayout header={<DynamicHeader />} footer={<Footer />}>
          {children}
        </ConditionalLayout>
        {/* Track page views on route changes */}
        <Analytics />
      </body>
    </html>
  );
}
