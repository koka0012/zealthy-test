import { User } from '@prisma/client'
import { buildUrl } from '../build-url'

const getUsersRequest = async () => {
  const request = await fetch(await buildUrl('user'), {
    method: 'GET',
  })
  const { data }: { data: User[] } = await request.json()
  return data
}

export { getUsersRequest }
