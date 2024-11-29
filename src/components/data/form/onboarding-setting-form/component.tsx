'use client'

import { DragTag } from '@/components/atoms/drag-tag'
import { DroppableColumn } from '@/components/molecules/droppable-collumn'
import { Draggable } from '@/components/molecules/droppable-field'
import { updateOnboardingSteps } from '@/lib/api/onboarding/updateOnboardingSteps'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { OnboardingComponent } from '@prisma/client'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

export interface OnboardingSettingFormProps {
  data: Record<string, string>
}

const OnboardingSettingForm = ({ data }: OnboardingSettingFormProps) => {
  const refData = useRef(data)
  const [parents, setParents] = useState<Record<string, string>>(
    refData.current,
  )

  async function handleDragEnd({ over, active }: DragEndEvent) {
    const newState = {
      ...parents,
      [active.id]: over?.id.toString() || parents[active.id],
    }

    const hasAnyEmptyStep =
      Object.keys(newState).every((key) => newState[key] !== '1') ||
      Object.keys(newState).every((key) => newState[key] !== '2')

    if (hasAnyEmptyStep) {
      toast.error('At least one field must be in each step')
      return
    }

    setParents(newState)

    // Send only steps that has been changed to api
    const updatedSteps = Object.keys(newState)
      .filter((key) => newState[key] !== refData.current[key])
      .map((key) => ({
        component: key as OnboardingComponent,
        step: newState[key],
      }))

    const serverData = await updateOnboardingSteps(updatedSteps)
    refData.current = serverData.data
  }

  const fields = [
    {
      id: OnboardingComponent.ABOUT_ME,
      component: (
        <Draggable
          id={OnboardingComponent.ABOUT_ME}
          key={OnboardingComponent.ABOUT_ME}
        >
          <DragTag>About Me</DragTag>
        </Draggable>
      ),
    },
    {
      id: OnboardingComponent.BIRTH_DATE,
      component: (
        <Draggable
          id={OnboardingComponent.BIRTH_DATE}
          key={OnboardingComponent.BIRTH_DATE}
        >
          <DragTag>Birth Date</DragTag>
        </Draggable>
      ),
    },
    {
      id: OnboardingComponent.ADDRESS,
      component: (
        <Draggable
          id={OnboardingComponent.ADDRESS}
          key={OnboardingComponent.ADDRESS}
        >
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
