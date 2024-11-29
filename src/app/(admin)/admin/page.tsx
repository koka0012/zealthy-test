import { OnboardingSettingForm } from '@/components/data/form/onboarding-setting-form'
import { getOnboardingStepsRequest } from '@/lib/api/onboarding/getOnboardingSteps'

export default async function AdminPage() {
  const data = await getOnboardingStepsRequest()

  return <OnboardingSettingForm data={data} />
}
