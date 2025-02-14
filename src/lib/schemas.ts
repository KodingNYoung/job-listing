import { z } from "zod"

// APPLY
export const applyPayloadSchema = z.object({
  fullname: z
    .string()
    .min(2, "Full name should not be less than 2 characters")
    .min(1, "Full name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  coverLetter: z
    .string()
    .min(3, "Cover letter should not be less than 10 characters")
    .min(1, "Cover letter is required"),
})
