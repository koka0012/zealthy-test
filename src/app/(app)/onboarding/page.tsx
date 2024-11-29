import { OnboardingForm } from '@/components/data/form/onboarding'
import { getOnboardingStepsRequest } from '@/lib/api/onboarding/getOnboardingSteps'

export default async function OnboardingPage() {
  const fields = await getOnboardingStepsRequest()
  return <OnboardingForm fields={fields} />
}
