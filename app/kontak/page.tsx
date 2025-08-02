import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, Instagram } from "lucide-react"

export const metadata = {
  title: "Hubungi Anisart | Konsultasi Kado Custom & Kerajinan Handmade",
  description:
    "Punya pertanyaan atau ingin pesan hadiah resin custom dari Anisart? Hubungi kami langsung melalui WhatsApp, email, atau media sosial.",
  keywords:
    "kontak Anisart, pesan kado resin custom, konsultasi hadiah handmade, hubungi Anisart, resin bunga asli Indonesia",
}

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-8 text-center">
      <h1 className="text-4xl font-serif text-stone-800 mb-4">Hubungi Anisart</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl">
        Punya pertanyaan atau ingin pesan hadiah resin custom dari Anisart? Jangan ragu untuk menghubungi kami!
      </p>
      <div className="space-y-4 mb-8 text-stone-700">
        <div className="flex items-center justify-center space-x-3">
          <Mail className="w-5 h-5" />
          <span>hello@anisart.studio</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Phone className="w-5 h-5" />
          <span>+62 812-3456-7890</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Instagram className="w-5 h-5" />
          <span>@anisart.studio</span>
        </div>
      </div>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
