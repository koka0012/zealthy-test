import { updateUserRequest } from '@/lib/api/user/updateUser'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { toast } from 'sonner'
import { z } from 'zod'
import { OnboardingFormSchema } from './schema'

const onboardingCompleteFormAction = async (
  data: z.infer<typeof OnboardingFormSchema>,
) => {
  try {
    const user = JSON.parse(window.localStorage.getItem('user')!)

    await updateUserRequest(user.id, data)

    toast.success('Data saved...')
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

export { onboardingCompleteFormAction }
