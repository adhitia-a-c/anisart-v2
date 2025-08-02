import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle, Instagram } from "lucide-react"

export default function PanduanPerawatanPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header - Replicated from app/page.tsx for consistency */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Anisart%20STudio-lq9WZlhA2XTxT0IeytJ00OTBW7cPGs.png"
                alt="Anisart Studio"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-serif text-stone-800">Anisart</h1>
                <p className="text-xs text-stone-600">Studio</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-stone-700 hover:text-orange-600 transition-colors">
                Beranda
              </Link>
              <Link href="/katalog" className="text-stone-700 hover:text-orange-600 transition-colors">
                Katalog
              </Link>
              <Link href="/custom" className="text-stone-700 hover:text-orange-600 transition-colors">
                Custom Order
              </Link>
              <Link href="/tentang" className="text-stone-700 hover:text-orange-600 transition-colors">
                Tentang Kami
              </Link>
              <Link href="/galeri" className="text-stone-700 hover:text-orange-600 transition-colors">
                Galeri
              </Link>
              <Link href="/kontak" className="text-stone-700 hover:text-orange-600 transition-colors">
                Kontak
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-serif text-stone-800 mb-8 text-center">Panduan Perawatan Produk Anisart</h1>
        <div className="prose prose-lg max-w-3xl mx-auto text-stone-700">
          <p>
            Produk Anisart Studio dibuat dengan resin berkualitas tinggi dan bunga asli yang diawetkan. Untuk menjaga
            keindahan dan ketahanan karya seni Anda, ikuti panduan perawatan berikut:
          </p>
          <h2>1. Hindari Paparan Sinar Matahari Langsung dan Panas Berlebih</h2>
          <ul>
            <li>
              Resin dapat menguning atau menjadi rapuh jika terpapar sinar UV langsung dalam jangka waktu lama.
              Tempatkan produk di area yang tidak terkena sinar matahari langsung.
            </li>
            <li>
              Hindari menempatkan produk di dekat sumber panas tinggi seperti radiator, pemanas, atau di dalam mobil
              yang panas, karena panas ekstrem dapat menyebabkan resin melunak atau berubah bentuk.
            </li>
          </ul>
          <h2>2. Bersihkan dengan Lembut</h2>
          <ul>
            <li>Untuk membersihkan debu atau kotoran, gunakan kain mikrofiber yang lembut dan kering.</li>
            <li>
              Jika ada noda, basahi sedikit kain dengan air bersih atau pembersih kaca non-abrasif, lalu seka dengan
              lembut. Hindari penggunaan bahan kimia keras atau pembersih abrasif yang dapat merusak permukaan resin.
            </li>
            <li>Pastikan produk benar-benar kering setelah dibersihkan.</li>
          </ul>
          <h2>3. Hindari Benturan dan Goresan</h2>
          <ul>
            <li>
              Meskipun resin cukup kuat, benturan keras atau jatuh dapat menyebabkan retakan atau pecah. Tangani produk
              dengan hati-hati.
            </li>
            <li>Hindari kontak dengan benda tajam atau kasar yang dapat menggores permukaan resin.</li>
          </ul>
          <h2>4. Jauhkan dari Bahan Kimia</h2>
          <ul>
            <li>
              Hindari kontak produk dengan parfum, alkohol, aseton, atau bahan kimia keras lainnya yang dapat merusak
              atau melarutkan resin.
            </li>
          </ul>
          <h2>5. Penyimpanan</h2>
          <ul>
            <li>
              Jika tidak digunakan, simpan produk di tempat yang sejuk, kering, dan terlindung dari debu. Kotak asli
              produk adalah tempat penyimpanan yang ideal.
            </li>
          </ul>
          <p>
            Dengan mengikuti panduan perawatan ini, produk Anisart Anda akan tetap indah dan awet selama bertahun-tahun,
            menjadi kenangan abadi yang selalu memancarkan keindahan.
          </p>
          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan lebih lanjut tentang perawatan produk, jangan ragu untuk menghubungi kami
            melalui:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4" />
              <Link href="mailto:hello@anisart.studio" className="hover:text-orange-600 transition-colors">
                hello@anisart.studio
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <MessageCircle className="w-4 h-4" />
              <Link
                href="https://wa.me/6285155151007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                WhatsApp Kami
              </Link>
            </li>
            <li className="flex items-center space-x-3">
              <Instagram className="w-4 h-4" />
              <Link
                href="https://instagram.com/anisart.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                @anisart.studio
              </Link>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer - Replicated from app/page.tsx for consistency */}
      <footer id="kontak" className="bg-stone-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Anisart%20STudio-lq9WZlhA2XTxT0IeytJ00OTBW7cPGs.png"
                  alt="Anisart Studio"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-serif">Anisart</h3>
                  <p className="text-sm text-stone-400">Studio</p>
                </div>
              </div>
              <p className="text-stone-400">
                Hadiah dari Hati, Buatan Tangan.
                <br />
                Setiap Bunga Adalah Cerita.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/katalog" className="hover:text-white transition-colors">
                    Koleksi
                  </Link>
                </li>
                <li>
                  <Link href="/custom" className="hover:text-white transition-colors">
                    Custom Order
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <Link href="/panduan-perawatan" className="hover:text-white transition-colors">
                    Panduan Perawatan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-3 text-stone-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <Link href="mailto:hello@anisart.studio" className="hover:text-white transition-colors">
                    hello@anisart.studio
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4" />
                  <Link
                    href="https://wa.me/6285155151007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Kami
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="w-4 h-4" />
                  <Link
                    href="https://instagram.com/anisart.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @anisart.studio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} Anisart Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
