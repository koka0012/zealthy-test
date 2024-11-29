import { z } from 'zod'

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export { SignInFormSchema }
