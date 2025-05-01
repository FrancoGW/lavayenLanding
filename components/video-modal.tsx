"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Bloquear el scroll cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
          <video className="w-full h-full" controls autoPlay src={videoSrc}>
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </div>
    </div>
  )
}
