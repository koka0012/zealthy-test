import { signInRequest } from '@/lib/api/user/signIn'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'
import { SignInFormSchema } from './schema'

const sigInFormAction = async (data: z.infer<typeof SignInFormSchema>) => {
  try {
    const user = await signInRequest({
      email: data.email,
      password: data.password,
    })

    if (!user) {
      toast.error('Invalid credentials', { position: 'bottom-center' })
      return
    }

    console.log(user)

    window.localStorage.setItem('user', JSON.stringify(user))

    if (!user.onboardCompleted) {
      redirect('/onboarding')
    } else {
      redirect('/data')
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(
      { error: 'An unexpected error occurred' },
      { status: 500 },
    )
  }
}

export { sigInFormAction }
