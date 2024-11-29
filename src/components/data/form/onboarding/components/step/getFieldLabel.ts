import { OnboardingComponent } from '@prisma/client'

const getFieldLabel = (type: OnboardingComponent) => {
  switch (type) {
    case OnboardingComponent.ABOUT_ME:
      return 'About me'
    case OnboardingComponent.ADDRESS:
      return 'Address'
    case OnboardingComponent.BIRTH_DATE:
      return 'Birth date'
    default:
      return ''
  }
}

export { getFieldLabel }
