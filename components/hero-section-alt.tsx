"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HeroSectionAlt() {
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
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 pb-16">
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
              Eleva tus entrenamientos al <span className="text-primary">siguiente nivel</span>
            </h1>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Conviértete en un entrenador de élite en solo 3 meses con el Método Lavayen
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
              <video controls className="w-full h-full" poster="/placeholder.svg?height=720&width=1280">
                <source src="/video-placeholder.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto sm:min-w-[400px]"
            >
              ¡Quiero Convertirme en un Entrenador de Élite!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
              Conocer más
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  )
}
