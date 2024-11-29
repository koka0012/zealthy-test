'use client'

import { useDroppable } from '@dnd-kit/core'

export interface DroppableColumnProps {
  children?: React.ReactNode
  title: string
  id: string
}

const DroppableColumn = ({ children, title, id }: DroppableColumnProps) => {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div className="flex flex-1 flex-col gap-2">
      <h3 className="text-center text-base font-semibold">{title}</h3>
      <div
        ref={setNodeRef}
        className="flex min-h-32 flex-col gap-2 rounded-lg bg-slate-100 p-2"
      >
        {children}
      </div>
    </div>
  )
}

export { DroppableColumn }
