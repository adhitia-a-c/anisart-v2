import type { Metadata } from "next" // Metadata is server-only
import CustomOrderClientPage from "./CustomOrderClientPage"

// Metadata should ideally be in a separate layout.tsx or a server component page.tsx
// For a client component, you might define it in a parent layout or use generateMetadata function.
// For simplicity in this example, I'll keep it here but note the best practice.
export const metadata: Metadata = {
  title: "Pesan Custom Anisart | Wujudkan Hadiah Impian Anda",
  description:
    "Ciptakan hadiah resin handmade yang benar-benar unik dan personal dengan layanan custom order Anisart. Ekspresikan ceritamu.",
  keywords: "custom order resin, hadiah personal, kado custom, resin bunga custom, Anisart custom gift",
}

export default function CustomOrderPage() {
  return <CustomOrderClientPage />
}
