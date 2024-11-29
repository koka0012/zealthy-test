import { buildUrl } from '../build-url'

export interface SignInRequestBody {
  email: string
  password: string
}

export interface SignInResponseBody {
  id: string
  email: string
  onboardCompleted: boolean
}

const signInRequest = async (data: SignInRequestBody) => {
  return fetch(await buildUrl('user'), {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export { signInRequest }
