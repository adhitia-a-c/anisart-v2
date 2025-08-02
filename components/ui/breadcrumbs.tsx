"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

interface BreadcrumbsProps {
  productName: string
}

export function Breadcrumbs({ productName }: BreadcrumbsProps) {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean) // ['produk', 'id']

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href="/" className="text-sm text-stone-600 hover:text-orange-600 transition-colors">
            Beranda
          </Link>
        </li>
        <li className="inline-flex items-center">
          <ChevronRight className="w-4 h-4 text-stone-400" />
          <Link href="/katalog" className="ml-1 text-sm text-stone-600 hover:text-orange-600 transition-colors">
            Koleksi
          </Link>
        </li>
        {/* The last item is the current product name */}
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-stone-400" />
            <span className="ml-1 text-sm font-medium text-stone-800">{productName}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
