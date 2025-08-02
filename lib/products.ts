export interface Product {
  id: string
  name: string
  category: string
  image: string
  blurDataURL?: string
  isFeatured?: boolean
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Gantungan Kunci Bunga Mawar",
    category: "Gantungan Kunci",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6141921995_eatv-Y7AoL2DrMS7h7GhJXjZ262JaLyuTf1.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Dekorasi Meja Etnik",
    category: "Dekorasi Rumah",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91I6t4K-S0L.jpg-0EYuWo6gTBzRqUIh1DFZZxh5my67fJ.jpeg",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Hantaran Pernikahan Bunga Kering",
    category: "Hantaran",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_570xN.4932447282_mii9-JgYMd9O7305q3RBBH1x041M5CbCq8x.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Resin Art Hexagonal Kuning",
    category: "Resin Art",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/il_fullxfull.6209349430_sre8-GUWjlNbrMNZMrIT3AtwyW0WTCxLzWc.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Kalung Resin Bunga Ungu",
    category: "Perhiasan",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
  {
    id: "6",
    name: "Pembatas Buku Daun Emas",
    category: "Aksesoris",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
  {
    id: "7",
    name: "Coaster Bunga Daisy",
    category: "Dekorasi Rumah",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
  {
    id: "8",
    name: "Lampu Tidur Bunga Sakura",
    category: "Dekorasi Rumah",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
  {
    id: "9",
    name: "Cincin Resin Bunga Kecil",
    category: "Perhiasan",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
  {
    id: "10",
    name: "Pigura Foto Bunga Kering",
    category: "Hantaran",
    image: "/placeholder.avif",
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
    isFeatured: false,
  },
]
