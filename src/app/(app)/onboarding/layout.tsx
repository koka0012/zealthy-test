import { MultiStepContextProvider } from '@/components/data/form/onboarding/context'

export interface OnboardingLayoutProps {
  children: React.ReactNode
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return <MultiStepContextProvider>{children}</MultiStepContextProvider>
}
