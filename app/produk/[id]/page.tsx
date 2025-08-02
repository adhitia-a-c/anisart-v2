import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { allProducts, type Product } from "@/lib/products" // Import product data and type
import { notFound } from "next/navigation" // Import notFound for 404 handling
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs" // Import Breadcrumbs component

// Generate metadata dynamically based on product
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = allProducts.find((p) => p.id === params.id)

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Anisart",
      description: "Halaman produk yang Anda cari tidak ditemukan.",
    }
  }

  return {
    title: `${product.name} | Anisart Handmade Resin`,
    description: product.description,
    keywords: `${product.name.toLowerCase()}, ${product.category.toLowerCase()}, kerajinan resin, bunga asli, hadiah custom, Anisart`,
    openGraph: {
      title: `${product.name} | Anisart Handmade Resin`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Anisart Handmade Resin`,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product | undefined = allProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound() // Render Next.js 404 page if product not found
  }

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-xl p-8 md:p-12 my-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs productName={product.name} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
              priority // Prioritize loading for the main product image
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-serif text-stone-800">{product.name}</h1>
            <p className="text-lg text-stone-600 leading-relaxed">{product.description}</p>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-stone-800">Kategori:</h2>
              <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                {product.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Link href="/custom">Pesan Custom Produk Ini</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
              >
                <Link href="/katalog">Kembali ke Katalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
