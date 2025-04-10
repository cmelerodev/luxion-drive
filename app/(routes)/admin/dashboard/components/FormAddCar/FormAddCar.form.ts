import { z } from "zod"

export const formSchema = z.object({
  model: z.string().min(2).max(50),
  brand: z.string().min(2).max(50),
  year: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  km: z.string().min(2).max(50),
  fuel_type: z.string().min(2).max(50),
  cv: z.string().min(2).max(50),
  description: z.string().min(2),
  photo: z.string().min(2).max(100),
  color: z.string().min(2).max(50),
  puertas: z.string().min(1),
  plazas: z.string().min(1),
})