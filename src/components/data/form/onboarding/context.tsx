'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface FormData {
  birthDate: Date
  aboutMe: string
  address: {
    country: string
    street: string
    city: string
    state: string
    zip: string
  }
}

interface MultiStepContextType {
  step: number
  nextStep: () => void
  prevStep: () => void
  saveUserData: (data: FormData) => void
}

export const MultiStepContext = createContext({} as MultiStepContextType)

interface MultiStepContextProviderProps {
  children: ReactNode
}

export function MultiStepContextProvider({
  children,
}: MultiStepContextProviderProps) {
  const [step, setStep] = useState(1)

  function saveUserData(data: FormData) {
    console.log(data)
  }
  function nextStep() {
    console.log(step)
    if (step === 2) return
    setStep((prev) => prev + 1)
  }
  function prevStep() {
    if (step === 1) return
    setStep((prev) => prev - 1)
  }

  return (
    <MultiStepContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        saveUserData,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  )
}

export const useMultiContext = () => useContext(MultiStepContext)
