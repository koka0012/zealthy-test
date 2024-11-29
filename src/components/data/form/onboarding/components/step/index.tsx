'use client'

import { OnboardingComponent } from '@prisma/client'
import { useFormContext } from 'react-hook-form'
import { renderField } from './renderField'

export interface StepProps {
  fields: Record<string, string>
}

function Step({ fields }: StepProps) {
  const { control } = useFormContext()
  return (
    <>
      {Object.entries(fields).map(([key]) => {
        return renderField(key as OnboardingComponent, control)
      })}
    </>
  )
}

export { Step }
