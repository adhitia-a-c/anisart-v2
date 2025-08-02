import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle, Instagram } from "lucide-react"

export default function KebijakanPrivasiPage() {
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
        <h1 className="text-4xl font-serif text-stone-800 mb-8 text-center">Kebijakan Privasi</h1>
        <div className="prose prose-lg max-w-3xl mx-auto text-stone-700">
          <p>
            Selamat datang di Kebijakan Privasi Anisart Studio. Kami sangat menghargai kepercayaan Anda dan berkomitmen
            untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan melindungi informasi Anda saat Anda mengunjungi situs web kami atau menggunakan layanan
            kami.
          </p>
          <h2>Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, seperti saat Anda membuat pesanan,
            mendaftar untuk buletin kami, atau menghubungi kami. Informasi ini dapat meliputi:
          </p>
          <ul>
            <li>Nama lengkap</li>
            <li>Alamat email</li>
            <li>Alamat pengiriman</li>
            <li>Nomor telepon</li>
            <li>Detail pembayaran (melalui penyedia layanan pembayaran pihak ketiga yang aman)</li>
            <li>Informasi lain yang Anda pilih untuk berikan kepada kami</li>
          </ul>
          <p>
            Kami juga secara otomatis mengumpulkan informasi tertentu saat Anda mengakses dan menggunakan situs web
            kami, termasuk alamat IP Anda, jenis browser, sistem operasi, halaman yang Anda kunjungi, dan waktu akses.
          </p>
          <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:</p>
          <ul>
            <li>Memproses dan memenuhi pesanan Anda</li>
            <li>Menyediakan layanan pelanggan dan dukungan</li>
            <li>Mengirimkan pembaruan pesanan dan informasi terkait</li>
            <li>Mengirimkan buletin, promosi, dan informasi pemasaran lainnya (jika Anda berlangganan)</li>
            <li>Meningkatkan situs web dan layanan kami</li>
            <li>Mencegah penipuan dan memastikan keamanan</li>
            <li>Mematuhi kewajiban hukum</li>
          </ul>
          <h2>Pembagian Informasi</h2>
          <p>
            Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Kami dapat
            membagikan informasi Anda dengan penyedia layanan pihak ketiga yang membantu kami dalam mengoperasikan
            bisnis kami (misalnya, penyedia layanan pengiriman, pemroses pembayaran), dengan syarat mereka setuju untuk
            menjaga kerahasiaan informasi Anda.
          </p>
          <h2>Keamanan Data</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses,
            penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi data melalui internet atau
            penyimpanan elektronik yang 100% aman.
          </p>
          <h2>Perubahan pada Kebijakan Privasi Ini</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman
            ini, dan tanggal "Terakhir Diperbarui" akan direvisi. Kami mendorong Anda untuk meninjau Kebijakan Privasi
            ini secara berkala.
          </p>
          <h2>Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, jangan ragu untuk menghubungi
            kami melalui:
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
