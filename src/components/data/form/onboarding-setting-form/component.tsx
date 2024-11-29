'use client'

import { DragTag } from '@/components/atoms/drag-tag'
import { DroppableColumn } from '@/components/molecules/droppable-collumn'
import { Draggable } from '@/components/molecules/droppable-field'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { useState } from 'react'

const OnboardingSettingForm = () => {
  const [parents, setParents] = useState<Record<string, string>>({
    aboutMe: '1',
    birthDate: '1',
    address: '2',
  })

  function handleDragEnd({ over, active }: DragEndEvent) {
    setParents((state) => ({
      ...state,
      [active.id]: over?.id.toString() || state[active.id],
    }))
  }

  const fields = [
    {
      id: 'aboutMe',
      component: (
        <Draggable id="aboutMe" key="aboutMe">
          <DragTag>About Me</DragTag>
        </Draggable>
      ),
    },
    {
      id: 'birthDate',
      component: (
        <Draggable id="birthDate" key="birthDate">
          <DragTag>Birth Date</DragTag>
        </Draggable>
      ),
    },
    {
      id: 'address',
      component: (
        <Draggable id="address" key="address">
          <DragTag>Address</DragTag>
        </Draggable>
      ),
    },
  ]

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row justify-between gap-4">
        <DroppableColumn id="1" title="Step 1">
          {fields
            .filter((field) => parents[field.id] === '1')
            .map((field) => field.component)}
        </DroppableColumn>
        <DroppableColumn id="2" title="Step 2">
          {fields
            .filter((field) => parents[field.id] === '2')
            .map((field) => field.component)}
        </DroppableColumn>
      </div>
    </DndContext>
  )
}

export { OnboardingSettingForm }
