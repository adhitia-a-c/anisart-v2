import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata = {
  title: "Testimoni Pelanggan | Anisart - Hadiah Resin Handmade yang Berkesan",
  description:
    "Simak cerita dan ulasan nyata dari pelanggan Anisart yang telah memilih hadiah handmade resin penuh makna untuk momen spesial mereka.",
  keywords:
    "testimoni Anisart, ulasan pelanggan, hadiah handmade resin, review kerajinan bunga asli, kado personal unik",
}

export default function TestimoniPage() {
  const testimonials = [
    {
      name: "Dina",
      location: "Bandung",
      quote: "Bunganya beneran asli dan cantik banget! Temen aku sampe nangis pas dapet hadiah Anisart.",
    },
    {
      name: "Rizka",
      location: "Jakarta",
      quote:
        "Pesanan custom-nya sesuai banget sama request aku, hasilnya elegan dan rapi banget. Benar-benar dari hati!",
    },
    {
      name: "Andi",
      location: "Surabaya",
      quote:
        "Kualitasnya premium banget, detail bunga-bunganya masih keliatan jelas. Ini hadiah terbaik yang pernah aku kasih!",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-8 text-center">
      <h1 className="text-4xl font-serif text-stone-800 mb-4">Apa Kata Mereka Tentang Anisart?</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl">
        Simak cerita dan ulasan nyata dari pelanggan kami yang telah memilih hadiah handmade resin penuh makna.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white border-stone-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stone-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-orange-800 font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-stone-800">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
