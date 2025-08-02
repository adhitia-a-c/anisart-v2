"use server"

import { z } from "zod"

// Define the Zod schema for form validation
const customOrderSchema = z.object({
  name: z.string().min(1, { message: "Nama lengkap wajib diisi." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  phone: z
    .string()
    .min(10, { message: "Nomor telepon wajib diisi (min. 10 digit)." })
    .max(15, { message: "Nomor telepon terlalu panjang (max. 15 digit)." }),
  productType: z.enum(["gantungan-kunci", "dekorasi-rumah", "hantaran", "lainnya"], {
    errorMap: () => ({ message: "Jenis produk wajib dipilih." }),
  }),
  flowersColors: z.string().optional(), // Optional field
  description: z.string().min(10, { message: "Deskripsi pesanan wajib diisi (min. 10 karakter)." }),
  // For file upload, you would handle it separately, e.g., using a dedicated file upload service
  // file: z.instanceof(File).optional(), // Example for file validation
})

// Define the state type for useActionState
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

export async function createCustomOrder(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    productType: formData.get("productType"),
    flowersColors: formData.get("flowersColors"),
    description: formData.get("description"),
    // file: formData.get('file'), // For actual file handling
  }

  // Validate form data
  const validatedFields = customOrderSchema.safeParse(data)

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors)
    return {
      message: "Gagal mengirim pesanan. Mohon periksa kembali input Anda.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // If validation passes, process the data
  const { name, email, phone, productType, flowersColors, description } = validatedFields.data

  // In a real application, you would save this data to a database
  // For example:
  // await db.insert(orders).values({ name, email, phone, productType, flowersColors, description });

  console.log("Custom Order Received:", {
    name,
    email,
    phone,
    productType,
    flowersColors,
    description,
  })

  // Revalidate any paths that might display custom orders (if applicable)
  // revalidatePath('/admin/custom-orders')

  return { message: "Pesanan custom Anda telah berhasil dikirim! Kami akan segera menghubungi Anda." }
}
