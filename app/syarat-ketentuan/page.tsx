import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle, Instagram } from "lucide-react"

export default function SyaratKetentuanPage() {
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
        <h1 className="text-4xl font-serif text-stone-800 mb-8 text-center">Syarat & Ketentuan</h1>
        <div className="prose prose-lg max-w-3xl mx-auto text-stone-700">
          <p>
            Selamat datang di Anisart Studio. Dengan mengakses atau menggunakan situs web dan layanan kami, Anda
            menyetujui untuk terikat oleh Syarat & Ketentuan ini. Harap baca dengan seksama sebelum melakukan pembelian
            atau menggunakan layanan kami.
          </p>
          <h2>1. Ketentuan Umum</h2>
          <ul>
            <li>
              Semua produk Anisart Studio adalah kerajinan tangan (handmade) dan mungkin memiliki sedikit variasi dalam
              warna, bentuk, atau detail dibandingkan dengan gambar produk. Ini adalah bagian dari keunikan produk
              handmade.
            </li>
            <li>Kami berhak untuk menolak layanan kepada siapa pun karena alasan apa pun setiap saat.</li>
            <li>
              Informasi yang diberikan di situs ini adalah untuk tujuan informasi umum saja dan tidak boleh diandalkan
              sebagai satu-satunya dasar untuk membuat keputusan tanpa berkonsultasi dengan sumber informasi primer,
              lebih akurat, lebih lengkap, atau lebih tepat waktu.
            </li>
          </ul>
          <h2>2. Produk dan Layanan</h2>
          <ul>
            <li>Harga produk kami dapat berubah tanpa pemberitahuan.</li>
            <li>
              Kami berhak untuk memodifikasi atau menghentikan Layanan (atau bagian atau kontennya) tanpa pemberitahuan
              kapan saja.
            </li>
            <li>
              Kami telah berusaha semaksimal mungkin untuk menampilkan warna dan gambar produk kami seakurat mungkin
              yang muncul di toko. Kami tidak dapat menjamin bahwa tampilan warna monitor komputer Anda akan akurat.
            </li>
          </ul>
          <h2>3. Pesanan Custom</h2>
          <ul>
            <li>
              Untuk pesanan custom, detail desain, warna, dan elemen lainnya akan dikonfirmasi dengan pelanggan sebelum
              proses produksi dimulai.
            </li>
            <li>
              Perubahan signifikan pada desain setelah konfirmasi dapat dikenakan biaya tambahan atau penundaan waktu
              produksi.
            </li>
            <li>Pembayaran penuh atau uang muka mungkin diperlukan untuk pesanan custom sebelum produksi dimulai.</li>
          </ul>
          <h2>4. Pengiriman</h2>
          <ul>
            <li>
              Waktu pengiriman yang disebutkan adalah perkiraan dan dapat bervariasi tergantung pada lokasi dan kondisi
              kurir.
            </li>
            <li>
              Kami tidak bertanggung jawab atas keterlambatan pengiriman yang disebabkan oleh pihak ketiga (kurir) atau
              keadaan force majeure.
            </li>
            <li>Biaya pengiriman akan dihitung saat checkout dan ditanggung oleh pembeli.</li>
          </ul>
          <h2>5. Pengembalian dan Penukaran</h2>
          <ul>
            <li>
              Karena sifat produk kami yang handmade dan seringkali personal/custom, kami tidak menerima pengembalian
              atau penukaran kecuali produk yang diterima rusak atau tidak sesuai dengan pesanan yang dikonfirmasi.
            </li>
            <li>
              Klaim kerusakan atau ketidaksesuaian harus diajukan dalam waktu 24 jam setelah produk diterima, disertai
              dengan bukti foto/video unboxing.
            </li>
          </ul>
          <h2>6. Hak Kekayaan Intelektual</h2>
          <ul>
            <li>
              Semua konten di situs ini, termasuk teks, gambar, logo, dan desain, adalah milik Anisart Studio atau
              pemberi lisensinya dan dilindungi oleh undang-undang hak cipta.
            </li>
            <li>
              Anda tidak diizinkan untuk mereproduksi, menduplikasi, menyalin, menjual, menjual kembali, atau
              mengeksploitasi bagian mana pun dari Layanan, penggunaan Layanan, atau akses ke Layanan atau kontak apa
              pun di situs web tempat layanan disediakan, tanpa izin tertulis dari kami.
            </li>
          </ul>
          <h2>7. Perubahan Syarat & Ketentuan</h2>
          <p>
            Kami berhak untuk memperbarui, mengubah, atau mengganti bagian mana pun dari Syarat & Ketentuan ini dengan
            memposting pembaruan dan/atau perubahan ke situs web kami. Merupakan tanggung jawab Anda untuk memeriksa
            halaman ini secara berkala untuk perubahan.
          </p>
          <h2>Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami melalui:</p>
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
