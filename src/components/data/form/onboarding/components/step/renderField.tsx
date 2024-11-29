import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/atoms/form'
import { Input } from '@/components/atoms/input'
import { Textarea } from '@/components/atoms/textarea'
import { OnboardingComponent } from '@prisma/client'
import { Control, FieldValues } from 'react-hook-form'
import { getFieldLabel } from './getFieldLabel'
import { getFieldName } from './getFieldName'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/popover'
import { Button } from '@/components/atoms/button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from '@/components/atoms/calendar'
import { cn } from '@/lib/utils'

const renderField = (
  type: OnboardingComponent,
  control: Control<FieldValues>,
) => {
  // return (
  //   <FormItem>
  //     <FormLabel className="flex items-center justify-between">
  //       {getFieldLabel(type)}
  //       <FormMessage />
  //     </FormLabel>
  //     <FormControl>
  //       <Input placeholder="e.g Stephen King" {...field} />
  //     </FormControl>
  //   </FormItem>
  // )
  switch (type) {
    case OnboardingComponent.ABOUT_ME:
      return (
        <FormField
          key={type}
          control={control}
          name={getFieldName(type)}
          render={({ field }) => (
            <FormItem className="pt-2">
              <FormLabel className="flex items-center justify-between">
                {getFieldLabel(type)}
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Textarea placeholder="e.g Stephen King" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      )
    case OnboardingComponent.ADDRESS:
      return (
        <div className="flex flex-col gap-2 pt-2" key={type}>
          <FormField
            control={control}
            name={`${getFieldName(type)}.street`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between">
                  Street
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g 1234 Elm Street" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-row gap-2">
            <FormField
              control={control}
              name={`${getFieldName(type)}.city`}
              render={({ field }) => (
                <FormItem className="flex-2">
                  <FormLabel className="flex items-center justify-between">
                    Street
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g Springfield" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`${getFieldName(type)}.state`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="flex items-center justify-between">
                    State
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g Illinois" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name={`${getFieldName(type)}.zip`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between">
                  Zip Code
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g 12345" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      )
    case OnboardingComponent.BIRTH_DATE:
      return (
        <FormField
          key={type}
          control={control}
          name={`${getFieldName(type)}`}
          render={({ field }) => (
            <FormItem className="pt-2">
              <FormLabel className="flex items-center justify-between">
                Birth Date
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ?
                        format(field.value, 'PPP')
                      : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => field.onChange(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
            </FormItem>
          )}
        />
      )
    default:
      return null
  }
}

export { renderField }
