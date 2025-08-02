import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Flower, Sparkles, Star, Instagram, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeInSection } from "@/components/ui/fade-in-section"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { allProducts } from "@/lib/products"

export default function AnisartLanding() {
  const featuredProducts = allProducts.filter((product) => product.isFeatured)

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
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of Anisart Studio logo, a stylized flower with text
              />
              <div>
                <h1 className="text-xl font-serif text-stone-800">Anisart</h1>
                <p className="text-xs text-stone-600">Studio</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#beranda" className="text-stone-700 hover:text-orange-600 transition-colors">
                Beranda
              </Link>
              <Link href="#koleksi" className="text-stone-700 hover:text-orange-600 transition-colors">
                Koleksi
              </Link>
              <Link href="/custom" className="text-stone-700 hover:text-orange-600 transition-colors">
                Custom Order
              </Link>
              <Link href="#tentang" className="text-stone-700 hover:text-orange-600 transition-colors">
                Tentang Kami
              </Link>
              <Link href="/galeri" className="text-stone-700 hover:text-orange-600 transition-colors">
                Galeri
              </Link>
              <Link href="#kontak" className="text-stone-700 hover:text-orange-600 transition-colors">
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

      {/* Hero Section */}
      <FadeInSection threshold={0.2} delay={100}>
        <section id="beranda" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-rose-50/30 to-green-50/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">✨ Handmade dengan Cinta</Badge>
                  <h1 className="text-4xl lg:text-6xl font-serif text-stone-800 leading-tight">
                    Abadikan Momen,
                    <br />
                    <span className="text-orange-600">Bungkus dalam Keindahan</span>
                  </h1>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Kerajinan resin handmade dengan bunga asli dan sentuhan budaya—hadiah personal yang tak terlupakan.
                    Setiap karya Anisart merangkum cerita hati.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3" asChild>
                    <Link href="/katalog">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Lihat Koleksi
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
                    asChild
                  >
                    <Link href="/custom">
                      <Heart className="w-5 h-5 mr-2" />
                      Pesan Custom
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6209349430_sre8-GUWjlNbrMNZMrIT3AtwyW0WTCxLzWc.avif"
                    alt="Anisart Resin Flower Art"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of a hexagonal resin art piece with a yellow flower inside
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Highlight Produk */}
      <FadeInSection threshold={0.1} delay={100}>
        <section id="koleksi" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">
                Temukan Karya Anisart: Hadiah dari Hati, Buatan Tangan
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Setiap kategori produk kami dirancang khusus untuk momen-momen istimewa dalam hidup Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6141921995_eatv-Y7AoL2DrMS7h7GhJXjZ262JaLyuTf1.avif"
                      alt="Gantungan Kunci Personal"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of a resin keychain with a red rose inside
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-serif text-stone-800">Gantungan Kunci Personal</h3>
                    <p className="text-stone-600">
                      Simbol kecil penuh makna, setia menemani langkahmu. Abadikan senyuman, genggam kenangan.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      asChild
                    >
                      <Link href="/katalog">Jelajahi Koleksi</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91I6t4K-S0L.jpg-0EYuWo6gTBzRqUIh1DFZZxh5my67fJ.jpeg"
                      alt="Dekorasi Rumah Etnik"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of a traditional ethnic home decoration
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-serif text-stone-800">Dekorasi Rumah Etnik</h3>
                    <p className="text-stone-600">
                      Keindahan yang menghangatkan ruangan, membawa sentuhan identitas lokal ke setiap sudut hunian.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      asChild
                    >
                      <Link href="/katalog">Jelajahi Koleksi</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-stone-200">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_570xN.4932447282_mii9-JgYMd9O7305q3RBBH1x041M5CbCq8x.avif"
                      alt="Hantaran Istimewa"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of a wedding frame with dried flowers and resin
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-serif text-stone-800">Hantaran Istimewa</h3>
                    <p className="text-stone-600">
                      Tradisi, cinta, dan keindahan dalam satu bingkisan sakral—hadiah untuk awal cerita baru.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                      asChild
                    >
                      <Link href="/katalog">Jelajahi Koleksi</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Value Proposition */}
      <FadeInSection threshold={0.1} delay={100}>
        <section className="py-20 bg-gradient-to-br from-green-50/30 to-rose-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">Mengapa Memilih Anisart?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Flower className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-serif text-stone-800">Bunga Asli Abadi</h3>
                <p className="text-stone-600">
                  Dibekukan dalam resin jernih, tak layu, tak pudar. Kenangan Anda abadi dalam keindahan.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-serif text-stone-800">100% Handmade</h3>
                <p className="text-stone-600">
                  Setiap karya dirancang dengan cinta dan presisi. Sentuhan personal dari hati untuk hati.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-serif text-stone-800">Sentuhan Budaya</h3>
                <p className="text-stone-600">
                  Detail etnik yang membawa identitas lokal, menjadikan setiap karya begitu istimewa dan bermakna.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-serif text-stone-800">Bisa Custom Nama & Warna</h3>
                <p className="text-stone-600">
                  Ciptakan produk yang benar-benar "kamu." Ekspresikan ceritamu, wujudkan idemu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Brand Story */}
      <FadeInSection threshold={0.1} delay={100}>
        <section id="tentang" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif text-stone-800">
                  Kisah di Balik Anisart: Setiap Bunga Adalah Cerita
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Anisart lahir dari kecintaan yang mendalam terhadap keindahan alam dan kekayaan budaya Indonesia. Kami
                  percaya bahwa setiap bunga memiliki kisahnya sendiri, dan setiap momen berharga layak dikenang dalam
                  karya seni yang personal dan abadi.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Kami merangkum makna dalam setiap keping resin yang kami ciptakan, menghadirkan keindahan yang tak
                  lekang oleh waktu untuk menghiasi momen-momen istimewa dalam hidup Anda.
                </p>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  asChild
                >
                  <Link href="/tentang">Baca Lebih Lanjut Tentang Kami</Link>
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/921e2eb2a180a2242a26fca6b87c8ec91785d3c7f0fe65d1023369224a99ac96.avif"
                  alt="Anisart Crafting Process"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of hands crafting resin art with flowers
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimoni */}
      <FadeInSection threshold={0.1} delay={100}>
        <section id="testimoni" className="py-20 bg-stone-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-stone-800 mb-4">Apa Kata Mereka Tentang Anisart?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">
                    "Bunganya beneran asli dan cantik banget! Temen aku sampe nangis pas dapet hadiah Anisart."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-800 font-semibold">D</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-stone-800">Dina</p>
                      <p className="text-sm text-stone-600">Bandung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">
                    "Pesanan custom-nya sesuai banget sama request aku, hasilnya elegan dan rapi banget. Benar-benar
                    dari hati!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-800 font-semibold">R</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-stone-800">Rizka</p>
                      <p className="text-sm text-stone-600">Jakarta</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">
                    "Kualitasnya premium banget, detail bunga-bunganya masih keliatan jelas. Ini hadiah terbaik yang
                    pernah aku kasih!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-800 font-semibold">A</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-stone-800">Andi</p>
                      <p className="text-sm text-stone-600">Surabaya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Featured Products Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Produk Unggulan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Koleksi Terbaik Kami</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Temukan keindahan dan keunikan dalam setiap karya Anisart.
              </p>
            </div>
          </div>
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                        <Image
                          alt={product.name}
                          className="aspect-square object-cover rounded-md"
                          height={200}
                          src={product.image || "/placeholder.avif"} // Changed to .avif
                          width={200}
                          placeholder="blur"
                          blurDataURL={
                            product.blurDataURL ||
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                          } // Kept base64 PNG
                        />
                        <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                        <Link href={`/produk/${product.id}`} className="mt-2 text-sm text-blue-600 hover:underline">
                          Lihat Detail
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Final */}
      <FadeInSection threshold={0.1} delay={100}>
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-5xl font-serif">Jangan Biarkan Ceritamu Hanya Jadi Kenangan</h2>
              <p className="text-xl opacity-90">
                Abadikan dalam Keindahan Abadi Anisart. Mulai ciptakan hadiah yang berbicara dari hati—sebuah karya seni
                personal yang akan dikenang selamanya.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-stone-100 px-8 py-3" asChild>
                  <Link href="/katalog">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Belanja Sekarang
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
                  asChild
                >
                  <Link href="/custom">
                    <Heart className="w-5 h-5 mr-2" />
                    Pesan Hadiah Custom
                  </Link>
                </Button>
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
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" // Blurred image of Anisart Studio logo, a stylized flower with text
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
                  <Link href="#beranda" className="hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="#koleksi" className="hover:text-white transition-colors">
                    Koleksi
                  </Link>
                </li>
                <li>
                  <Link href="/custom" className="hover:text-white transition-colors">
                    Custom Order
                  </Link>
                </li>
                <li>
                  <Link href="#tentang" className="hover:text-white transition-colors">
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
