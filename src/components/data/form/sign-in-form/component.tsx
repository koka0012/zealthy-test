'use client'

import { Form } from '@/components/atoms/form'
import { FormTextInput } from '@/components/molecules/form-text-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SignInFormSchema } from './schema'
import { Button } from '@/components/atoms/button'

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleOnSubmit = (data: z.infer<typeof SignInFormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-4"
      >
        <FormTextInput
          form={form}
          name="email"
          label="Email"
          placeholder="jhon@doe.com"
        />
        <FormTextInput
          secure
          form={form}
          name="password"
          label="Password"
          placeholder="********"
        />
        <div className="flex justify-end">
          <Button type="submit">Sign-In</Button>
        </div>
      </form>
    </Form>
  )
}

export { SignInForm }
