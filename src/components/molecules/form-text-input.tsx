import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../atoms/form'
import { Input } from '../atoms/input'

export interface FormTextInputProps<T extends FieldValues> {
  form: UseFormReturn<T, unknown, undefined>
  label: string
  name: Path<T>
  placeholder?: string
  secure?: boolean
}

const FormTextInput = <T extends FieldValues>({
  form,
  label,
  name,
  placeholder,
  secure,
}: FormTextInputProps<T>) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className="flex flex-row justify-between">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type={secure ? 'password' : 'text'}
          />
        </FormControl>
      </FormItem>
    )}
  />
)

export { FormTextInput }
