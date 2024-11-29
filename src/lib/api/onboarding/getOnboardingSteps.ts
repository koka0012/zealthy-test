import { buildUrl } from '../build-url'

export interface OnboardingStepsResponseBody {
  data: Record<string, string>
}

const getOnboardingStepsRequest = async () => {
  const request = await fetch(await buildUrl('onboarding/steps'), {
    method: 'GET',
  })
  const { data }: OnboardingStepsResponseBody = await request.json()
  return data
}

export { getOnboardingStepsRequest }
