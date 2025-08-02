"use client" // Make this a client component

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Import Input component
import { Card, CardContent } from "@/components/ui/card" // Import Card components
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react" // Import useState and useMemo
import { allProducts } from "@/lib/products" // Import product data

// Metadata is defined in layout.tsx or a server component page.tsx
// For client components, it's best to define it in a parent server component or layout.
// For simplicity, we'll keep the client component here.

export default function KatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter products based on search term
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return allProducts
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm),
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Katalog Produk Anisart</h1>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto text-center">
          Jelajahi koleksi eksklusif kerajinan resin handmade kami dengan sentuhan bunga asli. Temukan gantungan kunci,
          dekorasi rumah, dan hadiah custom yang unik.
        </p>

        {/* Search Input */}
        <div className="mb-12 w-full max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Cari produk (misal: gantungan kunci, mawar, etnik)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-stone-200">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-serif text-stone-800">{product.name}</h3>
                    <p className="text-stone-600 text-sm">{product.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      asChild
                    >
                      <Link href={`/produk/${product.id}`}>Lihat Detail</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-stone-600 text-lg py-12">
            <p>Maaf, produk yang Anda cari tidak ditemukan.</p>
            <p>Coba kata kunci lain atau jelajahi semua koleksi kami.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
