"use client"

import { useEffect } from 'react'

interface ConversionEventData {
  ip?: string
  userAgent?: string
  email?: string
  phone?: string
  contentName?: string
  contentCategory?: string
  value?: number
  currency?: string
  customData?: Record<string, any>
}

export const useFacebookConversion = () => {
  useEffect(() => {
    // Asegurarse de que la función sendConversionEvent esté disponible
    if (typeof window !== 'undefined' && !window.sendConversionEvent) {
      console.warn('Facebook Conversion API no está inicializada')
    }
  }, [])

  const trackConversion = async (eventName: string, eventData: ConversionEventData = {}) => {
    if (typeof window !== 'undefined' && window.sendConversionEvent) {
      try {
        await window.sendConversionEvent(eventName, {
          ip: eventData.ip,
          userAgent: eventData.userAgent || navigator.userAgent,
          email: eventData.email,
          phone: eventData.phone,
          contentName: eventData.contentName,
          contentCategory: eventData.contentCategory,
          value: eventData.value,
          currency: eventData.currency,
          customData: eventData.customData
        })
        return true
      } catch (error) {
        console.error('Error al rastrear conversión:', error)
        return false
      }
    }
    return false
  }

  return { trackConversion }
}

// Extender la interfaz Window para incluir la función sendConversionEvent
declare global {
  interface Window {
    sendConversionEvent: (eventName: string, eventData: any) => Promise<void>
  }
} 
