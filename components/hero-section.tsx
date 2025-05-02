"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function HeroSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("programa")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/video-placeholder.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="container mx-auto relative z-20 px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conviértete en un entrenador de élite en solo 3 meses con el Método Lavayen
            </h1>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Aprende técnicas avanzadas, planifica como un profesional y potencia el desarrollo de tus jugadores desde
              el primer entrenamiento.
            </p>
          </motion.div>

          {/* Video destacado en el centro */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
            }}
            className="mb-8"
          >
            <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
              <video controls className="w-full h-full">
                 <source src="/video.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex justify-center w-full px-4 mb-16"
          >
            <Button asChild size="lg" className="py-6 bg-primary hover:bg-primary/90 w-full">
              <Link href="https://pay.hotmart.com/K98327460Y" className="flex items-center justify-center">
                <span className="text-center text-xs sm:text-base md:text-lg lg:text-xl">
                  👉 ¡Quiero Convertirme en un Entrenador de Élite!
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10" />
      </button>
    </section>
  )
}
