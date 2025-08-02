"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { allProducts, type Product } from "@/lib/products"
import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const categories = [
    { id: "all", name: "Semua Produk" },
    { id: "gantungan-kunci", name: "Gantungan Kunci" },
    { id: "dekorasi-rumah", name: "Dekorasi Rumah" },
    { id: "hantaran", name: "Hantaran" },
    { id: "lainnya", name: "Lainnya" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Galeri Anisart</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl text-center">
        Temukan inspirasi dari berbagai kreasi resin handmade kami dengan bunga asli dan sentuhan etnik.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "border-orange-600 text-orange-600 hover:bg-orange-50"
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 w-full max-w-6xl">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              placeholder="blur" // Added placeholder blur
              // For remote images, you would typically provide a blurDataURL here:
              // blurDataURL="data:image/png;base64,..."
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
              <span className="text-white text-lg font-semibold">{product.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-3xl p-6">
          {selectedProduct && (
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-stone-800">{selectedProduct.name}</DialogTitle>
              <DialogDescription className="text-stone-600">
                <div className="relative w-full h-64 sm:h-80 md:h-96 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="bg-stone-100"
                    placeholder="blur" // Added placeholder blur
                    // For remote images, you would typically provide a blurDataURL here:
                    // blurDataURL="data:image/png;base64,..."
                  />
                </div>
                <p className="mb-2">{selectedProduct.description}</p>
                <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-200">
                  {categories.find((cat) => cat.id === selectedProduct.category)?.name || selectedProduct.category}
                </Badge>
              </DialogDescription>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>

      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
