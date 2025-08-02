import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Galeri Anisart | Inspirasi Kerajinan Resin Bunga Asli",
  description:
    "Jelajahi galeri Anisart untuk melihat berbagai kreasi resin handmade dengan bunga asli dan sentuhan etnik. Temukan inspirasi hadiah unik Anda.",
  keywords: "galeri resin, contoh kerajinan bunga, inspirasi hadiah handmade, Anisart gallery, resin art",
}

export default function GaleriPage() {
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6209349430_sre8-GUWjlNbrMNZMrIT3AtwyW0WTCxLzWc.webp",
      alt: "Resin Hexagonal Sunflowers",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_570xN.4932447282_mii9-JgYMd9O7305q3RBBH1x041M5CbCq8x.webp",
      alt: "Resin Photo Frame with Roses",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6141921995_eatv-Y7AoL2DrMS7h7GhJXjZ262JaLyuTf1.webp",
      alt: "Pressed Flowers in Resin Coasters",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/921e2eb2a180a2242a26fca6b87c8ec91785d3c7f0fe65d1023369224a99ac96.jpg-FT4di4Qug09YWvbdZXMjWduW2c5eQ3.jpeg",
      alt: "Vintage Botanical Moodboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91I6t4K-S0L.jpg-0EYuWo6gTBzRqUIh1DFZZxh5my67fJ.jpeg",
      alt: "Dried Flowers for Crafting",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOTANICALS-MOODBOARD.jpg-OhNMfhJsYikpwmFZ4N1BYLaf346Fss.jpeg",
      alt: "Botanical Moodboard Green Pink",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Galeri Anisart</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl text-center">
        Temukan inspirasi dari berbagai kreasi resin handmade kami dengan bunga asli dan sentuhan etnik.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
