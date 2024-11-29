import { cn } from '@/lib/utils'

export interface StepNumberProps {
  children: React.ReactNode
  active: boolean
}

const StepNumber = ({ children, active }: StepNumberProps) => {
  return (
    <p
      className={cn(
        'h-8 w-8 items-center rounded-full bg-slate-300 text-center font-bold leading-8 text-white',
        {
          'bg-primary text-primary-foreground': active,
        },
      )}
    >
      {children}
    </p>
  )
}

export { StepNumber }
