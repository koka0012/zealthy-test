import { prisma } from '@/lib/prisma'
import { OnboardingComponent } from '@prisma/client'
export const GET = async () => {
  const steps = await prisma.onboardingSteps.findMany()

  const data = steps.reduce((acc, step) => {
    return {
      ...acc,
      [step.component]: step.step,
    }
  }, {})

  return Response.json({ data }, { status: 200 })
}

export const POST = async (request: Request) => {
  const data: {
    component: OnboardingComponent
    step: string
  }[] = await request.json()

  for (const { component, step } of data) {
    await prisma.onboardingSteps.update({
      where: { component },
      data: { step },
    })
  }

  const steps = await prisma.onboardingSteps.findMany()

  const newData = steps.reduce((acc, step) => {
    return {
      ...acc,
      [step.component]: step.step,
    }
  }, {})

  return Response.json({ data: newData }, { status: 200 })
}
