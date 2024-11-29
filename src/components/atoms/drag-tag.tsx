export interface DragTagProps {
  children?: React.ReactNode
}

const DragTag = ({ children }: DragTagProps) => {
  return (
    <p className="rounded bg-white p-2 text-sm font-semibold">{children}</p>
  )
}

export { DragTag }
