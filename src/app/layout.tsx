import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://map-your-thoughts.vercel.app"),
  title: "Map your thoughts",
  description: "Share your ideas, stories, or anything on your mind.",
  creator: "sujjeee",
  keywords: [
    "map your thoughts",
    "maptiler",
    "next.js",
    "anonymous social media",
    "anonymous share",
    "maps",
    "sujjeeee",
  ],
  openGraph: {
    title: "Share your ideas, stories, or anything on your mind.",
    type: "website",
    url: "https://map-your-thoughts.vercel.app",
    images: [
      {
        url: "https://map-your-thoughts.vercel.app/opengraph-image.png",
        alt: "Share your ideas, stories, or anything on your mind.",
      },
    ],
  },
  twitter: {
    site: "@sujjeee",
    images: [
      {
        url: "https://map-your-thoughts.vercel.app/opengraph-image.png",
        alt: "Share your ideas, stories, or anything on your mind.",
      },
    ],
  },
}

export async function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
