import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Hadiah Pernikahan Unik | Anisart Resin Handmade dengan Bunga Asli",
  description:
    "Cari kado pernikahan yang personal dan berkesan? Temukan hadiah handmade resin Anisart dengan bunga asli dan desain etnik yang elegan.",
  keywords: "hadiah pernikahan unik, kado pengantin, hadiah handmade, resin bunga asli, Anisart wedding gift",
}

export default function HadiahPernikahanPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-8 text-center">
      <h1 className="text-4xl font-serif text-stone-800 mb-4">Hadiah Pernikahan Unik dari Anisart</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl">
        Abadikan momen sakral pernikahan dengan hadiah resin handmade yang personal dan tak terlupakan. Dibuat dengan
        bunga asli dan sentuhan elegan.
      </p>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
