"use client"

import { useEffect } from 'react'

interface ConversionEventData {
  ip?: string
  userAgent?: string
  customData?: Record<string, any>
}

export const useFacebookConversion = () => {
  useEffect(() => {
    // Asegurarse de que la función sendConversionEvent esté disponible
    if (typeof window !== 'undefined' && !window.sendConversionEvent) {
      console.warn('Facebook Conversion API no está inicializada')
    }
  }, [])

  const trackConversion = (eventName: string, eventData: ConversionEventData = {}) => {
    if (typeof window !== 'undefined' && window.sendConversionEvent) {
      window.sendConversionEvent(eventName, {
        ip: eventData.ip,
        userAgent: eventData.userAgent || navigator.userAgent,
        customData: eventData.customData
      })
    }
  }

  return { trackConversion }
}

// Extender la interfaz Window para incluir la función sendConversionEvent
declare global {
  interface Window {
    sendConversionEvent: (eventName: string, eventData: any) => void
  }
} 