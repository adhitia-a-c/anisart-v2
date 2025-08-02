"use client"
import { useActionState } from "react" // Import useActionState

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { createCustomOrder } from "./actions" // Import the Server Action

export default function CustomOrderClientPage() {
  // Initialize useActionState with the Server Action and an initial state
  const [state, formAction, pending] = useActionState(createCustomOrder, {
    message: null,
    errors: {},
  })

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 md:p-12 my-8">
        <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Pesan Custom Anisart</h1>
        <p className="text-lg text-stone-600 mb-8 text-center">
          Wujudkan ide hadiah impian Anda! Isi formulir di bawah ini untuk memulai proses pembuatan kerajinan resin
          handmade yang benar-benar unik dan personal sesuai keinginan Anda.
        </p>

        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" name="name" type="text" placeholder="Nama Anda" required />
              {state?.errors?.name && <p className="text-red-500 text-sm">{state.errors.name.join(", ")}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="email@contoh.com" required />
              {state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email.join(", ")}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Nomor Telepon (WhatsApp)</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+62 812-3456-7890" required />
            {state?.errors?.phone && <p className="text-red-500 text-sm">{state.errors.phone.join(", ")}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="productType">Jenis Produk yang Diinginkan</Label>
            <Select name="productType" required>
              <SelectTrigger id="productType">
                <SelectValue placeholder="Pilih jenis produk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gantungan-kunci">Gantungan Kunci Personal</SelectItem>
                <SelectItem value="dekorasi-rumah">Dekorasi Rumah Etnik</SelectItem>
                <SelectItem value="hantaran">Hantaran Istimewa</SelectItem>
                <SelectItem value="lainnya">Lainnya (Mohon jelaskan di deskripsi)</SelectItem>
              </SelectContent>
            </Select>
            {state?.errors?.productType && (
              <p className="text-red-500 text-sm">{state.errors.productType.join(", ")}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="flowersColors">Preferensi Bunga & Warna</Label>
            <Textarea
              id="flowersColors"
              name="flowersColors"
              placeholder="Contoh: Bunga mawar merah muda, daun hijau, dominasi warna pastel."
              rows={3}
            />
            {state?.errors?.flowersColors && (
              <p className="text-red-500 text-sm">{state.errors.flowersColors.join(", ")}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Detail Pesanan Custom</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Jelaskan ide Anda secara detail: ukuran, bentuk, tulisan/nama yang ingin ditambahkan, atau referensi lainnya."
              rows={5}
              required
            />
            {state?.errors?.description && (
              <p className="text-red-500 text-sm">{state.errors.description.join(", ")}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
            disabled={pending}
          >
            {pending ? "Mengirim Pesanan..." : "Kirim Pesanan Custom"}
          </Button>

          {state?.message && (
            <p className={`mt-4 text-center ${state.errors ? "text-red-500" : "text-green-600"}`}>{state.message}</p>
          )}
        </form>

        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
          >
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
