import { OnboardingComponent } from '@prisma/client'

const getFieldName = (field: OnboardingComponent) => {
  switch (field) {
    case OnboardingComponent.ABOUT_ME:
      return 'aboutMe'
    case OnboardingComponent.ADDRESS:
      return 'address'
    case OnboardingComponent.BIRTH_DATE:
      return 'birthDate'
  }
}

export { getFieldName }
