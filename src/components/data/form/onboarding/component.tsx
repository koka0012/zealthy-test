'use client'

import { Button } from '@/components/atoms/button'
import { Form } from '@/components/atoms/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { onboardingCompleteFormAction } from './action'
import { Step } from './components/step'
import { useMultiContext } from './context'
import { OnboardingFormSchema } from './schema'
import { getDefaultValues } from './getDefaultValue'

export interface OnboardingFormProps {
  fields: Record<string, string>
}

const OnboardingForm = ({ fields }: OnboardingFormProps) => {
  const form = useForm<z.infer<typeof OnboardingFormSchema>>({
    resolver: zodResolver(OnboardingFormSchema),
    defaultValues: getDefaultValues(),
  })

  const { step, nextStep, prevStep } = useMultiContext()

  async function handleOnSubmit(values: z.infer<typeof OnboardingFormSchema>) {
    await onboardingCompleteFormAction(values)
    nextStep()

    if (step === 2) {
      toast.success('All done! Go to /data to check the table.')
    }
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
