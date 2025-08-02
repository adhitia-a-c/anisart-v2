"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Define the form state type
type FormState = {
  message: string | null
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    productType?: string[]
    flowersColors?: string[]
    description?: string[]
  }
}

export default function CustomOrderClientPage() {
  const [step, setStep] = useState("form") // 'form' or 'review'
  const [collectedFormData, setCollectedFormData] = useState<FormData | null>(null)
  const [state, setState] = useState<FormState>({ message: null, errors: {} })
  const [pending, setPending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Effect to reset form and step after successful submission
  useEffect(() => {
    if (state.message && !state.errors) {
      setStep("form")
      setCollectedFormData(null)
      if (formRef.current) {
        formRef.current.reset()
      }
    }
  }, [state])

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setCollectedFormData(formData)
    setStep("review")
  }

  const handleConfirmOrder = async () => {
    if (!collectedFormData) return

    setPending(true)
    setState({ message: null, errors: {} })

    try {
      // Simulate form validation and submission
      const data = {
        name: collectedFormData.get("name")?.toString() || "",
        email: collectedFormData.get("email")?.toString() || "",
        phone: collectedFormData.get("phone")?.toString() || "",
        productType: collectedFormData.get("productType")?.toString() || "",
        flowersColors: collectedFormData.get("flowersColors")?.toString() || "",
        description: collectedFormData.get("description")?.toString() || "",
      }

      // Basic validation
      const errors: FormState["errors"] = {}

      if (!data.name.trim()) {
        errors.name = ["Nama lengkap wajib diisi."]
      }

      if (!data.email.trim()) {
        errors.email = ["Email wajib diisi."]
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = ["Format email tidak valid."]
      }

      if (!data.phone.trim()) {
        errors.phone = ["Nomor telepon wajib diisi."]
      } else if (data.phone.length < 10 || data.phone.length > 15) {
        errors.phone = ["Nomor telepon harus 10-15 digit."]
      }

      if (!data.productType) {
        errors.productType = ["Jenis produk wajib dipilih."]
      }

      if (!data.description.trim()) {
        errors.description = ["Deskripsi pesanan wajib diisi."]
      } else if (data.description.length < 10) {
        errors.description = ["Deskripsi pesanan minimal 10 karakter."]
      }

      if (Object.keys(errors).length > 0) {
        setState({
          message: "Gagal mengirim pesanan. Mohon periksa kembali input Anda.",
          errors,
        })
        setPending(false)
        return
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setState({
        message: "Pesanan custom Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.",
      })

      console.log("Custom Order Received:", data)
    } catch (error) {
      setState({
        message: "Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.",
      })
    } finally {
      setPending(false)
    }
  }

  const getFormDataValue = (key: string) => {
    return collectedFormData?.get(key)?.toString() || "Tidak diisi"
  }

  const getProductTypeName = (value: string) => {
    switch (value) {
      case "gantungan-kunci":
        return "Gantungan Kunci Personal"
      case "dekorasi-rumah":
        return "Dekorasi Rumah Etnik"
      case "hantaran":
        return "Hantaran Istimewa"
      case "lainnya":
        return "Lainnya"
      default:
        return "Tidak dipilih"
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50 p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8 md:p-12 my-8">
        <h1 className="text-4xl font-serif text-stone-800 mb-4 text-center">Pesan Custom Anisart</h1>
        <p className="text-lg text-stone-600 mb-8 text-center">
          Wujudkan ide hadiah impian Anda! Isi formulir di bawah ini untuk memulai proses pembuatan kerajinan resin
          handmade yang benar-benar unik dan personal sesuai keinginan Anda.
        </p>

        {step === "form" && (
          <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
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
              Lanjutkan ke Review
            </Button>
          </form>
        )}

        {step === "review" && collectedFormData && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-stone-800 mb-4 text-center">Review Pesanan Anda</h2>
            <p className="text-stone-600 text-center mb-6">
              Mohon periksa kembali detail pesanan Anda sebelum konfirmasi.
            </p>

            <div className="bg-stone-100 p-6 rounded-md space-y-4">
              <div>
                <p className="font-semibold text-stone-800">Nama Lengkap:</p>
                <p className="text-stone-700">{getFormDataValue("name")}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-800">Email:</p>
                <p className="text-stone-700">{getFormDataValue("email")}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-800">Nomor Telepon:</p>
                <p className="text-stone-700">{getFormDataValue("phone")}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-800">Jenis Produk:</p>
                <p className="text-stone-700">{getProductTypeName(getFormDataValue("productType"))}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-800">Preferensi Bunga & Warna:</p>
                <p className="text-stone-700">{getFormDataValue("flowersColors")}</p>
              </div>
              <div>
                <p className="font-semibold text-stone-800">Deskripsi Detail Pesanan:</p>
                <p className="text-stone-700">{getFormDataValue("description")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                type="button"
                onClick={() => setStep("form")}
                variant="outline"
                className="w-full border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
              >
                Kembali untuk Mengedit
              </Button>
              <Button
                type="button"
                onClick={handleConfirmOrder}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                disabled={pending}
              >
                {pending ? "Mengirim Pesanan..." : "Konfirmasi Pesanan"}
              </Button>
            </div>
          </div>
        )}

        {state?.message && (
          <p
            className={`mt-4 text-center ${state.errors && Object.keys(state.errors).length > 0 ? "text-red-500" : "text-green-600"}`}
          >
            {state.message}
          </p>
        )}

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
