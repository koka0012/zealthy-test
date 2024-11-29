'use server'

import { buildUrl } from '../build-url'

export interface SignInRequestBody {
  email: string
  password: string
}

export interface SignInResponseBody {
  data: { id: string; email: string; onboardCompleted: boolean }
}

const signInRequest = async (data: SignInRequestBody) => {
  const response = await fetch(await buildUrl('user'), {
    method: 'POST',
    body: JSON.stringify(data),
  })

  const { data: user } = (await response.json()) as SignInResponseBody

  return user
}

export { signInRequest }
