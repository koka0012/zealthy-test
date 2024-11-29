import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const DEFAULT_SELECT: Prisma.UserSelect = {
  id: true,
  email: true,
  onboardCompleted: true,
}

export const POST = async (request: Request) => {
  const data = await request.json()

  const user = await prisma.user.findUnique({
    where: { email: data.email },
    select: { ...DEFAULT_SELECT, hashedPassword: true },
  })

  if (user) {
    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      user.hashedPassword,
    )

    if (!isPasswordCorrect) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    return Response.json({ data: user }, { status: 200 })
  }

  const hashedPassword = await bcrypt.hash(data.password, 12)

  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      hashedPassword,
    },
    select: DEFAULT_SELECT,
  })

  return Response.json({ data: newUser }, { status: 201 })
}
