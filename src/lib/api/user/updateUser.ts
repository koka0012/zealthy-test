'use server'

import { buildUrl } from '../build-url'

export interface UpdateUserRequestBody {
  aboutMe?: string
  birthDate?: Date
  address?: {
    country?: string
    street?: string
    city?: string
    state?: string
    zip?: string
  }
  onboardCompleted?: boolean
}

export interface UpdateUserResponseBody {}

const updateUserRequest = async (id: string, data: UpdateUserRequestBody) => {
  const response = await fetch(await buildUrl(`user/${id}`), {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return response
}

export { updateUserRequest }
