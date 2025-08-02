import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Mail, Instagram } from "lucide-react"
import { FadeInSection } from "@/components/ui/fade-in-section"

export default function SyaratKetentuanPage() {
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

      {/* Terms and Conditions Content */}
      <FadeInSection threshold={0.1} delay={100}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-8 text-center">Syarat & Ketentuan</h2>
              <div className="prose prose-stone max-w-none">
                <p>
                  Selamat datang di Anisart Studio. Dengan mengakses atau menggunakan situs web kami, Anda setuju untuk
                  terikat oleh Syarat & Ketentuan ini. Harap baca dengan seksama sebelum melanjutkan.
                </p>

                <h3>1. Penggunaan Situs Web</h3>
                <ul>
                  <li>Anda harus berusia minimal 18 tahun untuk melakukan pembelian di situs web kami.</li>
                  <li>
                    Anda setuju untuk menggunakan situs web kami hanya untuk tujuan yang sah dan sesuai dengan Syarat &
                    Ketentuan ini.
                  </li>
                  <li>
                    Anda tidak boleh menggunakan situs web kami dengan cara apa pun yang dapat merusak, menonaktifkan,
                    membebani, atau mengganggu situs web atau mengganggu penggunaan dan kenikmatan situs web oleh pihak
                    lain.
                  </li>
                </ul>

                <h3>2. Produk dan Layanan</h3>
                <ul>
                  <li>
                    Kami berusaha untuk menampilkan produk kami seakurat mungkin, termasuk warna dan detail. Namun, kami
                    tidak dapat menjamin bahwa tampilan warna pada monitor Anda akan akurat.
                  </li>
                  <li>
                    Semua deskripsi produk atau harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan, atas
                    kebijakan kami sendiri.
                  </li>
                  <li>Kami berhak untuk membatasi jumlah produk atau layanan yang kami tawarkan.</li>
                </ul>

                <h3>3. Pemesanan dan Pembayaran</h3>
                <ul>
                  <li>
                    Saat Anda melakukan pemesanan, Anda menjamin bahwa semua informasi yang Anda berikan adalah benar
                    dan akurat, dan bahwa Anda memiliki wewenang untuk menggunakan metode pembayaran yang Anda pilih.
                  </li>
                  <li>Semua pesanan tunduk pada ketersediaan dan konfirmasi harga.</li>
                  <li>Kami berhak untuk menolak pesanan apa pun yang Anda tempatkan pada kami.</li>
                </ul>

                <h3>4. Pengiriman</h3>
                <ul>
                  <li>Kami akan mengirimkan produk ke alamat yang Anda berikan saat pemesanan.</li>
                  <li>
                    Waktu pengiriman adalah perkiraan dan tidak dijamin. Kami tidak bertanggung jawab atas keterlambatan
                    pengiriman yang disebabkan oleh pihak ketiga atau keadaan di luar kendali kami.
                  </li>
                </ul>

                <h3>5. Pengembalian dan Penukaran</h3>
                <ul>
                  <li>
                    Karena sifat produk kami yang handmade dan seringkali personal, kami tidak menerima pengembalian
                    atau penukaran kecuali produk yang diterima rusak atau cacat.
                  </li>
                  <li>
                    Klaim atas produk yang rusak atau cacat harus diajukan dalam waktu 3 hari setelah penerimaan produk,
                    disertai dengan bukti foto atau video.
                  </li>
                </ul>

                <h3>6. Hak Kekayaan Intelektual</h3>
                <ul>
                  <li>
                    Semua konten di situs web ini, termasuk teks, grafik, logo, gambar, dan perangkat lunak, adalah
                    milik Anisart Studio atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta.
                  </li>
                  <li>
                    Anda tidak boleh mereproduksi, mendistribusikan, memodifikasi, membuat karya turunan dari,
                    menampilkan secara publik, melakukan secara publik, menerbitkan ulang, mengunduh, menyimpan, atau
                    mentransmisikan materi apa pun di situs web kami, kecuali diizinkan secara tegas oleh Syarat &
                    Ketentuan ini.
                  </li>
                </ul>

                <h3>7. Batasan Tanggung Jawab</h3>
                <ul>
                  <li>
                    Anisart Studio tidak akan bertanggung jawab atas kerugian langsung, tidak langsung, insidental,
                    konsekuensial, atau hukuman yang timbul dari penggunaan atau ketidakmampuan Anda untuk menggunakan
                    situs web atau produk kami.
                  </li>
                </ul>

                <h3>8. Perubahan Syarat & Ketentuan</h3>
                <p>
                  Kami berhak untuk memperbarui, mengubah, atau mengganti bagian mana pun dari Syarat & Ketentuan ini
                  dengan memposting pembaruan dan/atau perubahan ke situs web kami. Merupakan tanggung jawab Anda untuk
                  memeriksa halaman ini secara berkala untuk perubahan.
                </p>

                <h3>9. Hukum yang Mengatur</h3>
                <p>Syarat & Ketentuan ini akan diatur dan ditafsirkan sesuai dengan hukum Indonesia.</p>

                <h3>Hubungi Kami</h3>
                <p>Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:</p>
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
