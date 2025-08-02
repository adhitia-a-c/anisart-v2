import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Hadiah Spesial untuk Perempuan | Kado Handmade Resin Anisart",
  description:
    "Cari kado estetik dan personal untuk ibu, sahabat, atau pasangan? Temukan hadiah handmade dari Anisart — resin dengan bunga asli dan nuansa etnik.",
  keywords: "hadiah untuk perempuan, kado handmade estetik, resin bunga asli, kado ulang tahun wanita, Anisart gift",
}

export default function HadiahPerempuanPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-8 text-center">
      <h1 className="text-4xl font-serif text-stone-800 mb-4">Hadiah Spesial untuk Perempuan</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl">
        Temukan kado estetik dan personal yang sempurna untuk ibu, sahabat, atau pasangan Anda. Kerajinan resin handmade
        dengan bunga asli dan nuansa etnik yang memukau.
      </p>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
