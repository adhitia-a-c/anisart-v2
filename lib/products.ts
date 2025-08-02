export interface Product {
  id: string
  name: string
  description: string
  category: "gantungan-kunci" | "dekorasi-rumah" | "hantaran" | "lainnya"
  image: string
}

export const allProducts: Product[] = [
  {
    id: "gk-001",
    name: "Gantungan Kunci Mawar Abadi",
    description: "Simbol kecil penuh makna, setia menemani langkahmu. Abadikan senyuman, genggam kenangan.",
    category: "gantungan-kunci",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6141921995_eatv-Y7AoL2DrMS7h7GhJXjZ262JaLyuTf1.webp",
  },
  {
    id: "gk-002",
    name: "Gantungan Kunci Lavender Tenang",
    description: "Aroma ketenangan dalam genggaman, pengingat momen damai.",
    category: "gantungan-kunci",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "dr-001",
    name: "Dekorasi Hexagonal Matahari",
    description: "Keindahan yang menghangatkan ruangan, membawa sentuhan identitas lokal ke setiap sudut hunian.",
    category: "dekorasi-rumah",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6209349430_sre8-GUWjlNbrMNZMrIT3AtwyW0WTCxLzWc.webp",
  },
  {
    id: "dr-002",
    name: "Dekorasi Meja Etnik Daun",
    description: "Sentuhan alami dan artistik untuk mempercantik ruang tamu Anda.",
    category: "dekorasi-rumah",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ht-001",
    name: "Hantaran Bingkai Pernikahan",
    description: "Tradisi, cinta, dan keindahan dalam satu bingkisan sakral—hadiah untuk awal cerita baru.",
    category: "hantaran",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_570xN.4932447282_mii9-JgYMd9O7305q3RBBH1x041M5CbCq8x.webp",
  },
  {
    id: "ht-002",
    name: "Hantaran Kotak Kenangan",
    description: "Kotak penyimpanan kenangan berharga, dihiasi bunga abadi.",
    category: "hantaran",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ln-001",
    name: "Set Coaster Bunga Kering",
    description: "Lindungi meja Anda dengan keindahan bunga kering yang diawetkan dalam resin.",
    category: "lainnya",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ln-002",
    name: "Pembatas Buku Bunga Mini",
    description: "Teman setia untuk setiap petualangan membaca Anda.",
    category: "lainnya",
    image: "/placeholder.svg?height=300&width=400",
  },
]
