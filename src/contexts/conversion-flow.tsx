import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { ConversionFlowDialog } from '@/components/site/ConversionFlowDialog'
import { captureUtmParams } from '@/lib/utm'

type ConversionFlowContextValue = {
  openFlow: () => void
  closeFlow: () => void
}

const ConversionFlowContext = createContext<ConversionFlowContextValue | null>(null)

export function ConversionFlowProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    captureUtmParams()
  }, [])

  return (
    <ConversionFlowContext.Provider
      value={{ openFlow: () => setOpen(true), closeFlow: () => setOpen(false) }}
    >
      {children}
      <ConversionFlowDialog open={open} onOpenChange={setOpen} />
    </ConversionFlowContext.Provider>
  )
}

export function useConversionFlow() {
  const ctx = useContext(ConversionFlowContext)
  if (!ctx) {
    throw new Error('useConversionFlow must be used within ConversionFlowProvider')
  }
  return ctx
}
