import { signInRequest, SignInResponseBody } from '@/lib/api/user/signIn'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'
import { SignInFormSchema } from './schema'

const sigInFormAction = async (data: z.infer<typeof SignInFormSchema>) => {
  try {
    const response = await signInRequest({
      email: data.email,
      password: data.password,
    })

    const responseData: SignInResponseBody = await response.json()

    if (response.status === 401) {
      toast.error('Invalid credentials', { position: 'bottom-center' })
      return
    }

    if (!responseData.onboardCompleted) {
      redirect('/onboarding')
    } else {
      redirect('/completed')
    }
  } catch (error) {
    console.error(error)

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
