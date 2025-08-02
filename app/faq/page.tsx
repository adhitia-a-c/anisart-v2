import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ Anisart | Pertanyaan Umum Kerajinan Resin Handmade",
  description:
    "Temukan jawaban atas pertanyaan umum seputar produk, pemesanan custom, pengiriman, dan perawatan kerajinan resin bunga asli Anisart.",
  keywords: "FAQ Anisart, pertanyaan umum resin, perawatan resin, pengiriman hadiah handmade, custom order FAQ",
}

export default function FAQPage() {
  const faqItems = [
    {
      question: "Apa itu Anisart?",
      answer:
        "Anisart adalah brand kerajinan tangan yang fokus pada pembuatan produk resin dengan bunga asli yang diawetkan, seringkali dengan sentuhan etnik dan personalisasi.",
    },
    {
      question: "Apakah bunga yang digunakan asli?",
      answer:
        "Ya, kami hanya menggunakan bunga asli yang telah melalui proses pengeringan dan pengawetan khusus untuk memastikan keindahan dan ketahanannya saat dibungkus dalam resin.",
    },
    {
      question: "Bisakah saya memesan produk custom?",
      answer:
        "Tentu! Kami sangat senang membantu Anda menciptakan produk custom. Anda bisa memilih jenis bunga, warna, menambahkan nama atau tulisan, dan mendiskusikan desain khusus lainnya. Silakan hubungi kami untuk konsultasi.",
    },
    {
      question: "Bagaimana cara merawat produk resin Anisart?",
      answer:
        "Produk resin kami cukup tahan lama. Hindari paparan sinar matahari langsung dalam jangka waktu lama, bersihkan dengan kain lembut dan sedikit air sabun jika perlu, dan hindari bahan kimia keras.",
    },
    {
      question: "Berapa lama proses pengerjaan custom order?",
      answer:
        "Waktu pengerjaan custom order bervariasi tergantung kerumitan desain dan antrean pesanan. Umumnya, dibutuhkan 7-14 hari kerja setelah konfirmasi desain. Kami akan memberikan estimasi yang lebih akurat saat Anda melakukan pemesanan.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Pertanyaan Umum (FAQ)</h1>
      <p className="text-lg text-stone-600 mb-8 max-w-2xl text-center">
        Temukan jawaban atas pertanyaan yang sering diajukan seputar produk dan layanan Anisart.
      </p>
      <div className="w-full max-w-3xl mb-12">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-stone-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-stone-800 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 text-base leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
