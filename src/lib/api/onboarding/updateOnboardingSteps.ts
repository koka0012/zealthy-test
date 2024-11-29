import { OnboardingComponent } from '@prisma/client'
import { buildUrl } from '../build-url'

export type OnboardingStepsRequestBody = {
  component: OnboardingComponent
  step: string
}[]

export interface OnboardingStepsResponseBody {
  data: Record<string, string>
}

const updateOnboardingSteps = async (data: OnboardingStepsRequestBody) => {
  const response = await fetch(await buildUrl('onboarding/steps'), {
    method: 'POST',
    body: JSON.stringify(data),
  })

  return response.json() as Promise<OnboardingStepsResponseBody>
}

export { updateOnboardingSteps }
