import type { Metadata } from "next"
import CustomOrderClientPage from "./CustomOrderClientPage"

export const metadata: Metadata = {
  title: "Pesan Custom Anisart | Wujudkan Hadiah Impian Anda",
  description:
    "Ciptakan hadiah resin handmade yang benar-benar unik dan personal dengan layanan custom order Anisart. Ekspresikan ceritamu.",
  keywords: "custom order resin, hadiah personal, kado custom, resin bunga custom, Anisart custom gift",
}

export default function CustomOrderPage() {
  return <CustomOrderClientPage />
}
