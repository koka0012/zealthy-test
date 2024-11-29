import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/atoms/card'
import { OnboardingSettingForm } from '@/components/data/form/onboarding-setting-form'
import { getOnboardingStepsRequest } from '@/lib/api/onboarding/getOnboardingSteps'

export default async function AdminPage() {
  const data = await getOnboardingStepsRequest()

  return (
    <div className="flex h-screen w-screen items-center justify-center px-4">
      <Card className="w-96 max-w-full">
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
          <CardDescription>
            Here you can configure the onboarding process.
            <br />
            Drag and drop the fields to the desired step.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OnboardingSettingForm data={data} />
        </CardContent>
      </Card>
    </div>
  )
}
