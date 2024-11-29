import { prisma } from '@/lib/prisma'

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const data = await request.json()

  const user = await prisma.user.update({
    data: {
      aboutMe: data.aboutMe,
      birthDate: data.birthDate,
      street: data.address.street,
      city: data.address.city,
      state: data.address.state,
      zip: data.address.zip,
    },
    where: { id: (await params).userId },
  })

  return Response.json({ data: user }, { status: 200 })
}
