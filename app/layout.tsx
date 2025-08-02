import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Anisart | Handmade Resin Etnik dengan Bunga Asli & Custom Gift Unik",
  description:
    "Temukan hadiah handmade penuh makna dari resin dan bunga asli. Anisart menghadirkan kerajinan etnik, elegan, dan 100% personal & custom.",
  keywords:
    "kerajinan resin, handmade bunga asli, hadiah custom, resin etnik, gantungan kunci bunga, kado unik handmade, Anisart Indonesia",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
