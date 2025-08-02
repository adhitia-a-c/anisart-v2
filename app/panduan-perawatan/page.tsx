import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Mail, Instagram } from "lucide-react"
import { FadeInSection } from "@/components/ui/fade-in-section"

export default function PanduanPerawatanPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
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
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
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
              <Link href="/#koleksi" className="text-stone-700 hover:text-orange-600 transition-colors">
                Koleksi
              </Link>
              <Link href="/custom" className="text-stone-700 hover:text-orange-600 transition-colors">
                Custom Order
              </Link>
              <Link href="/#tentang" className="text-stone-700 hover:text-orange-600 transition-colors">
                Tentang Kami
              </Link>
              <Link href="/galeri" className="text-stone-700 hover:text-orange-600 transition-colors">
                Galeri
              </Link>
              <Link href="/#kontak" className="text-stone-700 hover:text-orange-600 transition-colors">
                Kontak
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-stone-700">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-stone-700">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Care Guide Content */}
      <FadeInSection threshold={0.1} delay={100}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-8 text-center">
                Panduan Perawatan Produk Anisart
              </h2>
              <div className="prose prose-stone max-w-none">
                <p>
                  Produk Anisart Studio dibuat dengan cinta dan perhatian terhadap detail. Untuk memastikan karya resin
                  Anda tetap indah dan tahan lama, ikuti panduan perawatan berikut:
                </p>

                <h3>1. Hindari Paparan Sinar Matahari Langsung</h3>
                <p>
                  Sinar UV yang berlebihan dapat menyebabkan resin menguning atau memudar seiring waktu. Simpan produk
                  Anda di tempat yang sejuk dan kering, jauh dari jendela atau area yang terkena sinar matahari langsung
                  dalam jangka waktu lama.
                </p>

                <h3>2. Jauhkan dari Suhu Ekstrem</h3>
                <p>
                  Perubahan suhu yang drastis dapat menyebabkan resin retak atau melengkung. Hindari menempatkan produk
                  di dekat sumber panas seperti radiator, oven, atau di dalam mobil yang panas.
                </p>

                <h3>3. Bersihkan dengan Lembut</h3>
                <p>
                  Untuk membersihkan debu atau kotoran, gunakan kain mikrofiber yang lembut dan bersih. Jika ada noda,
                  basahi kain dengan sedikit air sabun ringan dan usap perlahan. Hindari penggunaan pembersih abrasif,
                  bahan kimia keras, atau alkohol, karena dapat merusak permukaan resin.
                </p>

                <h3>4. Hindari Goresan</h3>
                <p>
                  Meskipun resin cukup tahan lama, permukaan dapat tergores oleh benda tajam atau kasar. Hindari
                  menjatuhkan produk atau menempatkannya di permukaan yang dapat menyebabkan goresan.
                </p>

                <h3>5. Jangan Rendam dalam Air</h3>
                <p>
                  Produk resin Anisart tidak dirancang untuk direndam dalam air. Jika produk terkena air, segera
                  keringkan dengan kain lembut.
                </p>

                <h3>6. Penanganan Hati-hati</h3>
                <p>
                  Saat memindahkan atau menyimpan produk, pegang dengan hati-hati untuk menghindari benturan atau
                  tekanan yang berlebihan yang dapat menyebabkan kerusakan.
                </p>

                <h3>7. Penyimpanan</h3>
                <p>
                  Jika Anda perlu menyimpan produk untuk jangka waktu lama, bungkus dengan kain lembut atau bubble wrap
                  dan simpan di tempat yang aman dari debu dan kelembaban.
                </p>

                <p>
                  Dengan mengikuti panduan perawatan ini, Anda dapat menikmati keindahan karya Anisart Studio selama
                  bertahun-tahun. Jika Anda memiliki pertanyaan lebih lanjut tentang perawatan produk Anda, jangan ragu
                  untuk menghubungi kami.
                </p>

                <h3>Hubungi Kami</h3>
                <p>Jika Anda memiliki pertanyaan tentang panduan perawatan ini, silakan hubungi kami:</p>
                <ul>
                  <li>
                    Melalui email: <Link href="mailto:hello@anisart.studio">hello@anisart.studio</Link>
                  </li>
                  <li>
                    Melalui WhatsApp:{" "}
                    <Link href="https://wa.me/6285155151007" target="_blank" rel="noopener noreferrer">
                      WhatsApp Kami
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
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
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
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
                  <Link href="/#koleksi" className="hover:text-white transition-colors">
                    Koleksi
                  </Link>
                </li>
                <li>
                  <Link href="/custom" className="hover:text-white transition-colors">
                    Custom Order
                  </Link>
                </li>
                <li>
                  <Link href="/#tentang" className="hover:text-white transition-colors">
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
