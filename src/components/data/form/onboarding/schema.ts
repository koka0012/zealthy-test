import { z } from 'zod'

const OnboardingFormSchema = z.object({
  aboutMe: z.string().optional(),
  birthDate: z.date().optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }),
})

export { OnboardingFormSchema }
