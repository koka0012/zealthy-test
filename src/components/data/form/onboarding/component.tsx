'use client'

import { Button } from '@/components/atoms/button'
import { Form } from '@/components/atoms/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Step } from './components/step'
import { useMultiContext } from './context'
import { OnboardingFormSchema } from './schema'

export interface OnboardingFormProps {
  fields: Record<string, string>
}

const OnboardingForm = ({ fields }: OnboardingFormProps) => {
  const form = useForm<z.infer<typeof OnboardingFormSchema>>({
    resolver: zodResolver(OnboardingFormSchema),
    defaultValues: {
      aboutMe: '',
      birthDate: undefined,
      address: {
        country: '',
        street: '',
        city: '',
        state: '',
        zip: '',
      },
    },
  })

  const { step, nextStep, prevStep } = useMultiContext()

  function handleOnSubmit(values: z.infer<typeof OnboardingFormSchema>) {
    nextStep()

    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2 divide-y">
          <FormProvider {...form}>
            {step === 1 && (
              <Step
                fields={Object.fromEntries(
                  Object.entries(fields).filter(([, value]) => value === '1'),
                )}
              />
            )}
            {step === 2 && (
              <Step
                fields={Object.fromEntries(
                  Object.entries(fields).filter(([, value]) => value === '2'),
                )}
              />
            )}
          </FormProvider>
        </div>
        {step < 3 && (
          <div className="flex justify-end gap-2 bg-white">
            <Button
              type="button"
              variant={'outline'}
              className={`${step === 1 ? 'invisible' : ''}`}
              onClick={() => prevStep()}
            >
              Go Back
            </Button>
            <Button type="submit">
              {step === 2 ? 'Confirm' : 'Next Step'}
            </Button>
          </div>
        )}
      </form>
    </Form>
  )
}

export { OnboardingForm }
