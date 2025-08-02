import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Mail, Instagram } from "lucide-react"
import { FadeInSection } from "@/components/ui/fade-in-section"

export default function KebijakanPrivasiPage() {
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

      {/* Privacy Policy Content */}
      <FadeInSection threshold={0.1} delay={100}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-8 text-center">Kebijakan Privasi</h2>
              <div className="prose prose-stone max-w-none">
                <p>
                  Selamat datang di Anisart Studio. Kami sangat menghargai privasi Anda. Kebijakan Privasi ini
                  menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda
                  mengunjungi situs web kami atau menggunakan layanan kami.
                </p>

                <h3>Informasi yang Kami Kumpulkan</h3>
                <p>Kami dapat mengumpulkan berbagai jenis informasi dari Anda, termasuk:</p>
                <ul>
                  <li>
                    <strong>Informasi Pribadi:</strong> Nama, alamat email, alamat pengiriman, nomor telepon, dan
                    informasi pembayaran saat Anda melakukan pembelian atau mendaftar akun.
                  </li>
                  <li>
                    <strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda mengakses dan menggunakan situs
                    web kami, seperti alamat IP, jenis browser, halaman yang dikunjungi, waktu kunjungan, dan data
                    diagnostik lainnya.
                  </li>
                  <li>
                    <strong>Data Cookie:</strong> Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak
                    aktivitas di situs web kami dan menyimpan informasi tertentu.
                  </li>
                </ul>

                <h3>Bagaimana Kami Menggunakan Informasi Anda</h3>
                <p>Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:</p>
                <ul>
                  <li>Memproses pesanan Anda dan mengelola akun Anda.</li>
                  <li>Menyediakan, mengoperasikan, dan memelihara situs web kami.</li>
                  <li>Meningkatkan, mempersonalisasi, dan memperluas situs web kami.</li>
                  <li>Memahami dan menganalisis bagaimana Anda menggunakan situs web kami.</li>
                  <li>Mengembangkan produk, layanan, fitur, dan fungsionalitas baru.</li>
                  <li>
                    Berkomunikasi dengan Anda, baik secara langsung maupun melalui salah satu mitra kami, termasuk untuk
                    layanan pelanggan, untuk memberi Anda pembaruan dan informasi lain yang berkaitan dengan situs web,
                    dan untuk tujuan pemasaran dan promosi.
                  </li>
                  <li>Mengirimkan email kepada Anda.</li>
                  <li>Mencegah penipuan.</li>
                </ul>

                <h3>Pembagian Informasi Anda</h3>
                <p>
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami
                  dapat membagikan informasi Anda dengan pihak ketiga dalam situasi berikut:
                </p>
                <ul>
                  <li>
                    <strong>Penyedia Layanan:</strong> Kami dapat mempekerjakan perusahaan dan individu pihak ketiga
                    untuk memfasilitasi layanan kami (misalnya, pemrosesan pembayaran, pengiriman). Pihak ketiga ini
                    memiliki akses ke informasi pribadi Anda hanya untuk melakukan tugas-tugas ini atas nama kami dan
                    berkewajiban untuk tidak mengungkapkan atau menggunakannya untuk tujuan lain.
                  </li>
                  <li>
                    <strong>Kepatuhan Hukum:</strong> Kami dapat mengungkapkan informasi pribadi Anda jika diwajibkan
                    oleh hukum atau sebagai tanggapan atas permintaan yang sah oleh otoritas publik (misalnya, perintah
                    pengadilan atau permintaan pemerintah).
                  </li>
                </ul>

                <h3>Keamanan Data</h3>
                <p>
                  Keamanan informasi pribadi Anda sangat penting bagi kami. Kami berusaha untuk menggunakan cara yang
                  dapat diterima secara komersial untuk melindungi informasi pribadi Anda, tetapi ingat bahwa tidak ada
                  metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman.
                </p>

                <h3>Perubahan pada Kebijakan Privasi Ini</h3>
                <p>
                  Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang
                  perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Anda disarankan untuk
                  meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan.
                </p>

                <h3>Hubungi Kami</h3>
                <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:</p>
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
