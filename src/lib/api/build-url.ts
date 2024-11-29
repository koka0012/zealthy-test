'use server'

import { BASE_URL } from './constants'

const buildUrl = async (path: string) => {
  return `${BASE_URL}${path}`
}

export { buildUrl }
