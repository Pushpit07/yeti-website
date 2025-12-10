import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { DynamicHeader } from "@/components/DynamicHeader";
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
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ConditionalLayout header={<DynamicHeader />} footer={<Footer />}>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
