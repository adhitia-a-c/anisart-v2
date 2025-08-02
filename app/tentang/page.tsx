import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Tentang Anisart | Kerajinan Resin Handmade dengan Cerita & Budaya",
  description:
    "Anisart adalah brand lokal yang memadukan keindahan bunga asli dalam resin dengan nuansa etnik dan sentuhan personal. Dibuat dengan cinta.",
}

export default function TentangPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-8 text-center">
      <h1 className="text-4xl font-serif text-stone-800 mb-4">Kisah di Balik Anisart</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl">
        Anisart lahir dari kecintaan mendalam terhadap keindahan alam dan kekayaan budaya Indonesia. Kami percaya setiap
        bunga memiliki kisahnya sendiri, dan setiap momen berharga layak dikenang dalam karya seni yang personal dan
        abadi.
      </p>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
